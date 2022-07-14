import { createContext } from 'react';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { Comodin } from '../logic/interfaces';
import { Color } from '../logic/types';

interface ContextProps extends GameState {
    insertFicha: (ficha: FichaHexagonal<Color>,pieza: PiezaTriangular<Color>, casilla: CasillaTriangular<Color>) => void;
    useHammerComodin: (casilla: CasillaTriangular<Color>) => void;
    useDeleteComodin: (ficha: FichaHexagonal<Color>) => void; 
    toggleHammer: () => void;
    toggleDelete: () => void;
    canUseComodin: (comodin: Comodin) => boolean;
    comodins: {hammerComodin: Comodin, deleteComodin: Comodin};
}

export const GameContext = createContext({} as ContextProps);