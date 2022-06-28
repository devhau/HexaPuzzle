import { createContext } from 'react';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

interface ContextProps extends GameState {
    generateFicha: () => void;
    removeFicha: (ficha: FichaHexagonal) => void; 
}

export const GameContext = createContext({} as ContextProps);