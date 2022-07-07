import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { GameContext,GameReducer } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { useGame } from '../hooks';
import { Comodin } from '../logic/interfaces';

export interface GameState {
    tablero: CasillaTriangular[];
    points: number;
    tableroFormat: {[key: number]: number};
    fichas: FichaHexagonal[];
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

const initialState: GameState = {
    tablero: [],
    points: 0,
    tableroFormat,
    fichas: [],
    isUsingHammer: false,
    isUsingDelete: false,
    gameOver: false
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GameContextProvider: FC<Props> = ({children}) => {

    const [state,dispatch] = useReducer(GameReducer, initialState);
    const {inventory,tablero,pointsManager,comodines,outOfMovesRestriction} = useGame(tableroFormat);
    const {hammerComodin, deleteComodin} = comodines;

    const checkGameOver = () => {
        if(!outOfMovesRestriction.cumple) return;
        Cookies.set('lastPoints', pointsManager.points.toString());
        if(!Cookies.get('highestPoints')) Cookies.set('highestPoints', pointsManager.points.toString());      
        else if(Number(Cookies.get('highestPoints')) < pointsManager.points){
            Cookies.set('highestPoints', pointsManager.points.toString());
        }
        dispatch({type: 'gameOver'});
    }

    const insertFicha = (ficha: FichaHexagonal,pieza: PiezaTriangular, casilla: CasillaTriangular) => {
        if(!casilla.canInsert(pieza)) return;
        casilla.insertPieza(pieza);
        inventory.removeItem(ficha);
        inventory.addItem();
        dispatch({type: 'setFichas', payload: inventory.items});
        setTimeout(() => dispatch({type: 'setTablero', payload: tablero}),200);
        checkGameOver();
    }
    const useHammerComodin = (casilla: CasillaTriangular) => {
        if(!pointsManager.canUse(hammerComodin)) return;
        hammerComodin.use(casilla);
        pointsManager.update({type: 'use_comodin', payload: hammerComodin});
        dispatch({type: 'toggleHammer'});
        dispatch({type: 'setTablero', payload: tablero});
    }
    const useDeleteComodin = (ficha: FichaHexagonal) => {
        if(!pointsManager.canUse(deleteComodin)) return;
        deleteComodin.use(ficha);
        pointsManager.update({type: 'use_comodin', payload: deleteComodin});
        dispatch({type: 'toggleDelete'});
        dispatch({type: 'setFichas', payload: inventory.items});
    }
    const toggleHammer = () => {
        if(!pointsManager.canUse(hammerComodin)) return;
        dispatch({type: 'toggleHammer'});
    }
    const toggleDelete = () => {
        if(!pointsManager.canUse(deleteComodin)) return;
        dispatch({type: 'toggleDelete'});
    }
    const canUseComodin = (comodin: Comodin) => pointsManager.canUse(comodin);
    
    useEffect(() => {
      dispatch({type: 'setTablero', payload: tablero});
    }, [])
    useEffect(() => {
        dispatch({type: 'setFichas', payload: inventory.items});
    }, [])
    useEffect(() => {
        dispatch({type: 'setPoints', payload: pointsManager.points});
    }, [pointsManager.points])

    return (
        <GameContext.Provider value={{
            ...state,
            insertFicha,
            useHammerComodin,
            useDeleteComodin,
            toggleHammer,
            toggleDelete,
            canUseComodin,
            comodins: {hammerComodin, deleteComodin}
        }}>
            {children}
        </GameContext.Provider>
    )
};