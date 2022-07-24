import { createContext } from 'react';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { Comodin } from '../logic/interfaces';
import { Color } from '../logic/types';

interface ContextProps extends GameState {
    insertPieza: (pieza: PiezaTriangular<Color>, casilla: CasillaTriangular<Color>) => void;
    useHammerComodin: (casilla: CasillaTriangular<Color>) => void;
    useTrashComodin: (ficha: FichaHexagonal<Color>) => void; 
    toggleHammer: () => void;
    toggleDelete: () => void;
    canUseComodin: (comodin: Comodin<any>) => boolean;
    comodins: {hammerComodin: Comodin<CasillaTriangular<Color>>, trashComodin: Comodin<FichaHexagonal<Color>>};
}

export const GameContext = createContext({} as ContextProps);