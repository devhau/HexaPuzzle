import { createContext } from 'react';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { DragAndDropState } from './';
import { Color } from '../logic/types/Color';

interface ContextProps extends DragAndDropState {
    startDragging: (pieza: PiezaTriangular<Color>) => void;
    stopDragging: () => void;
}

export const DragAndDropContext = createContext<ContextProps>({} as ContextProps);