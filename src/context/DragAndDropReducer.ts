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
                isDragging: true,
                fichaDragging: action.payload
            }
        case 'stopDragging':
            return {
                ...state,
                isDragging: false,
                fichaDragging: null
            }
        default:
            return state;
    }
};