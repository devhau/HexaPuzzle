import { FC, useEffect, useReducer } from 'react';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { GameContext,GameReducer } from './';

export interface GameState {
    tablero: CasillaTriangular[];
    points: number;
}

const initialState: GameState = {
    tablero: [],
    points: 0
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const GameContextProvider: FC<Props> = ({children}) => {
    const [state,dispatch] = useReducer(GameReducer, initialState);
    useEffect(() => {
      //crear tablero
    }, [])
    return (
        <GameContext.Provider value={{...state}}>
            {children}
        </GameContext.Provider>
    )
};