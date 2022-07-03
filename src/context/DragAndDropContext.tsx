import { createContext } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { DragAndDropState } from './';

interface ContextProps extends DragAndDropState {
    startDragging: (ficha: FichaHexagonal, pieza: PiezaTriangular) => void;
    stopDragging: () => void;
}

export const DragAndDropContext = createContext<ContextProps>({} as ContextProps);