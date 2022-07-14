import { createContext } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { DragAndDropState } from './';
import { Color } from '../logic/types/Color';

interface ContextProps extends DragAndDropState {
    startDragging: (ficha: FichaHexagonal<Color>, pieza: PiezaTriangular<Color>) => void;
    stopDragging: () => void;
}

export const DragAndDropContext = createContext<ContextProps>({} as ContextProps);