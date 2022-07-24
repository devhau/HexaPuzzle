import { FC, useReducer } from 'react';
import { DragAndDropContext,DragAndDropReducer } from './';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';
import { Color } from '../logic/types';

export interface DragAndDropState {
    isDragging: boolean;
    piezaSelected: PiezaTriangular<Color> | null;
}

const initialState: DragAndDropState = {
    isDragging: false,
    piezaSelected: null
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const DragAndDropProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(DragAndDropReducer, initialState);
    const startDragging = (pieza: PiezaTriangular<Color>) => {
        dispatch({
            type: 'startDragging',
            payload: {
                pieza
            }
        });
    }
    const stopDragging = () => dispatch({type: 'stopDragging'});
    return (
        <DragAndDropContext.Provider 
            value={{
                ...state,
                startDragging,
                stopDragging
            }}
        >
            {children}
        </DragAndDropContext.Provider>
    )
}