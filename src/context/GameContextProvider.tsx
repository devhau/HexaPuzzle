import { FC, useEffect, useReducer, useMemo } from 'react';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { FichaHexagonalInventory } from '../logic/classes/FichaHexagonalInventory';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { GameContext,GameReducer } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

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

    const inventory = useMemo(() => new FichaHexagonalInventory(3),[]);
    const generateFicha = () => {
        inventory.add();
        dispatch({type: 'setFichas', payload: inventory.getItems()});
    }
    const removeFicha = (ficha: FichaHexagonal) => {
        inventory.remove(ficha);
        dispatch({type: 'setFichas', payload: inventory.getItems()});
    }

    const [state,dispatch] = useReducer(GameReducer, initialState);

    useEffect(() => {
      dispatch({type: 'setTablero', payload: tablero});
    }, [])
    useEffect(() => {
        dispatch({type: 'setFichas', payload: inventory.getItems()});
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