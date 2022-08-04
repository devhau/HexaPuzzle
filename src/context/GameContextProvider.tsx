import { FC, useEffect, useReducer, useState } from 'react';
import Cookies from 'js-cookie';
import { GameContext,GameReducer } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { useGame } from '../hooks';
import { Comodin } from '../logic/interfaces';
import { Toast } from '../helpers';
import { Color } from '../logic/types';

export interface GameState {
    tablero: CasillaTriangular<Color>[];
    points: number;
    tableroFormat: {[key: number]: number};
    fichas: FichaHexagonal<Color>[];
    isUsingHammer: boolean;
    isUsingDelete: boolean;
    gameOver: boolean;
}

const tableroFormat = {
    1: 7,
    2: 9,
    3: 11,
    4: 11,
    5: 9,
    6: 7
}

const tableroBigFormat = {
    1: 7,
    2: 9,
    3: 11,
    4: 13,
    5: 13,
    6: 11,
    7: 9,
    8: 7
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GameContextProvider: FC<Props> = ({children}) => {
    const [gameMode, setGameMode] = useState(Cookies.get('gameMode') || 'normal')
    const [boardSize, setBoardSize] = useState(Cookies.get('boardSize') || 'normal')

    const [state,dispatch] = useReducer(
        GameReducer,
        {
            tablero: [],
            points: 0,
            tableroFormat: boardSize === 'normal' ? tableroFormat : tableroBigFormat,
            fichas: [],
            isUsingHammer: false,
            isUsingDelete: false,
            gameOver: false
        }
    );
    const {
        inventory,
        tablero,
        pointsManager,
        comodines,
        gameOverFlag
    } = useGame(
        state.tableroFormat,
        gameMode === 'normal'
    );
    const {hammerComodin, trashComodin} = comodines;

    const checkGameOver = () => {
        if(!gameOverFlag.isGameOver()) return;
        Cookies.set('lastPoints', pointsManager.points.toString(),{expires: 7});
        if(!Cookies.get('highestPoints')) Cookies.set('highestPoints', pointsManager.points.toString(),{expires: 7});      
        else if(Number(Cookies.get('highestPoints')) < pointsManager.points){
            Cookies.set('highestPoints', pointsManager.points.toString(),{expires: 7});
        }
        dispatch({type: 'gameOver'});
    }

    const insertPieza = (pieza: PiezaTriangular<Color>, casilla: CasillaTriangular<Color>) => {
        if(!casilla.canInsert(pieza)) return Toast.fire({
            icon: 'error',
            title: 'No se puede insertar'
        });
        casilla.insertPieza(pieza);
        dispatch({type: 'setTablero', payload: tablero})
        checkGameOver();
    }
    const useHammerComodin = (casilla: CasillaTriangular<Color>) => {
        if(!pointsManager.canUse(hammerComodin)) return;
        hammerComodin.use(casilla);
        hammerComodin.costo += gameMode === 'normal' ? 18 : 9;
        dispatch({type: 'toggleHammer'});
    }
    const useTrashComodin = (ficha: FichaHexagonal<Color>) => {
        if(!pointsManager.canUse(trashComodin)) return;
        trashComodin.use(ficha);
        trashComodin.costo += gameMode === 'normal' ? 36 : 18;
        dispatch({type: 'toggleDelete'});
    }
    const toggleHammer = () => {
        if(!pointsManager.canUse(hammerComodin)) return;
        dispatch({type: 'toggleHammer'});
    }
    const toggleDelete = () => {
        if(!pointsManager.canUse(trashComodin)) return;
        dispatch({type: 'toggleDelete'});
    }
    const canUseComodin = (comodin: Comodin<any>) => pointsManager.canUse(comodin);
    
    useEffect(() => {
      dispatch({type: 'setTablero', payload: tablero});
    }, [])
    useEffect(() => {
        dispatch({type: 'setFichas', payload: inventory.items});
    }, [inventory.items])
    useEffect(() => {
        dispatch({type: 'setPoints', payload: pointsManager.points});
    }, [pointsManager.points])

    return (
        <GameContext.Provider value={{
            ...state,
            insertPieza,
            useHammerComodin,
            useTrashComodin,
            toggleHammer,
            toggleDelete,
            canUseComodin,
            comodins: {hammerComodin, trashComodin}
        }}>
            {children}
        </GameContext.Provider>
    )
};