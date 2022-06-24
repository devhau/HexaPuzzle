import { FC, useReducer } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { DragAndDropContext,DragAndDropReducer } from './';

export interface DragAndDropState {
    isDragging: boolean;
    fichaDragging: FichaHexagonal | null;
}

const initialState: DragAndDropState = {
    isDragging: false,
    fichaDragging: null
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const DragAndDropProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(DragAndDropReducer, initialState);
    const startDragging = (ficha: FichaHexagonal) => {
        dispatch({
            type: 'startDragging',
            payload: ficha
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