import { FC, useEffect, useReducer, useMemo } from 'react';
import { GameContext,GameReducer } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { Inventory } from '../logic/classes/Inventory';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { useGame } from '../hooks';

export interface GameState {
    tablero: CasillaTriangular[];
    points: number;
    tableroFormat: {[key: number]: number};
    fichas: FichaHexagonal[];
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
    fichas: []
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const GameContextProvider: FC<Props> = ({children}) => {

    const [state,dispatch] = useReducer(GameReducer, initialState);
    const {inventory,tablero,pointsManager} = useGame(tableroFormat);

    const insertFicha = (ficha: FichaHexagonal,pieza: PiezaTriangular, casilla: CasillaTriangular) => {
        if(!casilla.canInsert(pieza)) return;
        casilla.insertPieza(pieza);
        inventory.removeItem(ficha);
        inventory.addItem();
        dispatch({type: 'setFichas', payload: inventory.items});
        dispatch({type: 'setTablero', payload: tablero});
    }
    
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
            insertFicha
        }}>
            {children}
        </GameContext.Provider>
    )
};