import { GameState } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

type GameAction =
|{ type: 'setTablero', payload: CasillaTriangular[] }
|{ type: 'setFichas', payload: FichaHexagonal[] }
|{ type: 'setPoints', payload: number }
|{ type: 'toggleHammer' }
|{ type: 'toggleDelete' }

export const GameReducer = (state: GameState, action: GameAction) => {
    switch (action.type) {
        case 'setTablero':
            return {
                ...state,
                tablero: action.payload
            }
        case 'setFichas':
            return {
                ...state,
                fichas: action.payload
            }
        case 'setPoints':
            return {
                ...state,
                points: action.payload
            } 
        case 'toggleHammer':
            return {
                ...state,
                isUsingHammer: !state.isUsingHammer
            }
        case 'toggleDelete':
            return {
                ...state,
                isUsingDelete: !state.isUsingDelete
            }
        default:
            return state;
    }
};