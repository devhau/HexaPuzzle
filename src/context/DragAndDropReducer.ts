import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { DragAndDropState } from './';

type DragAndDropAction =
|{ type: 'startDragging', payload: {ficha: FichaHexagonal, pieza: PiezaTriangular} }
|{ type: 'stopDragging' };

export const DragAndDropReducer = (state: DragAndDropState, action: DragAndDropAction) => {
    switch (action.type) {
        case 'startDragging':
            return {
                ...state,
                isDragging: true,
                fichaDragging: action.payload.ficha,
                piezaSelected: action.payload.pieza
            }
        case 'stopDragging':
            return {
                ...state,
                isDragging: false,
                fichaDragging: null,
                piezaSelected: null
            }
        default:
            return state;
    }
};