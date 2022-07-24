import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { Color } from '../logic/types';
import { DragAndDropState } from './';

type DragAndDropAction =
|{ type: 'startDragging', payload: {pieza: PiezaTriangular<Color>} }
|{ type: 'stopDragging' };

export const DragAndDropReducer = (state: DragAndDropState, action: DragAndDropAction) => {
    switch (action.type) {
        case 'startDragging':
            return {
                ...state,
                isDragging: true,
                piezaSelected: action.payload.pieza
            }
        case 'stopDragging':
            return {
                ...state,
                isDragging: false,
                piezaSelected: null
            }
        default:
            return state;
    }
};