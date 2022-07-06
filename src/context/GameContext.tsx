import { createContext } from 'react';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { Comodin } from '../logic/interfaces';

interface ContextProps extends GameState {
    insertFicha: (ficha: FichaHexagonal,pieza: PiezaTriangular, casilla: CasillaTriangular) => void;
    useHammerComodin: (casilla: CasillaTriangular) => void;
    useDeleteComodin: (ficha: FichaHexagonal) => void; 
    toggleHammer: () => void;
    toggleDelete: () => void;
    canUseComodin: (comodin: Comodin) => boolean;
    comodins: {hammerComodin: Comodin, deleteComodin: Comodin};
}

export const GameContext = createContext({} as ContextProps);