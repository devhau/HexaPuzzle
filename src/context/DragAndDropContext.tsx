import { createContext } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { DragAndDropState } from './';

interface ContextProps extends DragAndDropState {
    startDragging: (ficha: FichaHexagonal) => void;
    stopDragging: () => void;
}

export const DragAndDropContext = createContext<ContextProps>({} as ContextProps);