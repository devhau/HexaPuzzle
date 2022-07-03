import { FC, useReducer } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { DragAndDropContext,DragAndDropReducer } from './';
import { PiezaTriangular } from '../logic/classes/PiezaTriangular';

export interface DragAndDropState {
    isDragging: boolean;
    fichaDragging: FichaHexagonal | null;
    piezaSelected: PiezaTriangular | null;
}

const initialState: DragAndDropState = {
    isDragging: false,
    fichaDragging: null,
    piezaSelected: null
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const DragAndDropProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(DragAndDropReducer, initialState);
    const startDragging = (ficha: FichaHexagonal,pieza: PiezaTriangular) => {
        dispatch({
            type: 'startDragging',
            payload: {
                ficha,
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