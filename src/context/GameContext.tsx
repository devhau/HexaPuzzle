import { createContext } from 'react';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';

interface ContextProps extends GameState {
    insertFicha: (ficha: FichaHexagonal,pieza: PiezaTriangular, casilla: CasillaTriangular) => void; 
}

export const GameContext = createContext({} as ContextProps);