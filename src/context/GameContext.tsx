import { createContext } from 'react';
import { GameState } from './';

interface ContextProps extends GameState {
    
}

export const GameContext = createContext({} as ContextProps);