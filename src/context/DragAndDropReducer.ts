import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { DragAndDropState } from './';

type DragAndDropAction =
|{ type: 'startDragging', payload: FichaHexagonal }
|{ type: 'stopDragging' };

export const DragAndDropReducer = (state: DragAndDropState, action: DragAndDropAction) => {
    switch (action.type) {
        case 'startDragging':
            return {
                ...state,
                dragging: true,
                ficha: action.payload
            }
        case 'stopDragging':
            return {
                ...state,
                dragging: false,
                ficha: null
            }
        default:
            return state;
    }
};