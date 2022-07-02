import { FC, useEffect, useReducer, useMemo } from 'react';
import { GameContext,GameReducer } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { Inventory } from '../logic/classes/Inventory';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';

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

    const tableroFactory = useMemo(() => new TableroHexagonalFactory(tableroFormat), []);
    const tablero = useMemo(() => tableroFactory.generate(), []);

    const inventory = useMemo(() => new Inventory<FichaHexagonal>(new FichaHexagonalFactory(),3),[]);
    const generateFicha = () => {
        inventory.addItem();
        dispatch({type: 'setFichas', payload: inventory.items});
    }
    const removeFicha = (ficha: FichaHexagonal) => {
        inventory.removeItem(ficha);
        dispatch({type: 'setFichas', payload: inventory.items});
    }

    const [state,dispatch] = useReducer(GameReducer, initialState);

    useEffect(() => {
      dispatch({type: 'setTablero', payload: tablero});
    }, [])
    useEffect(() => {
        dispatch({type: 'setFichas', payload: inventory.items});
    }, [])
    return (
        <GameContext.Provider value={{
            ...state,
            generateFicha,
            removeFicha
        }}>
            {children}
        </GameContext.Provider>
    )
};