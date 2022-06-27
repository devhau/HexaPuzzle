import { FC, useEffect, useReducer, useMemo } from 'react';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { GameContext,GameReducer } from './';

export interface GameState {
    tablero: CasillaTriangular[];
    points: number;
    tableroFormat: {[key: number]: number};
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
    tableroFormat
}

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const GameContextProvider: FC<Props> = ({children}) => {
    const tableroFactory = useMemo(() => new TableroHexagonalFactory(tableroFormat), []);
    const tablero = useMemo(() => tableroFactory.generate(), []);
    const [state,dispatch] = useReducer(GameReducer, initialState);
    useEffect(() => {
      dispatch({type: 'setTablero', payload: tablero});
    }, [])
    return (
        <GameContext.Provider value={{...state}}>
            {children}
        </GameContext.Provider>
    )
};