import { GameState } from './';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { Color } from '../logic/types';

type GameAction =
|{ type: 'setTablero', payload: CasillaTriangular<Color>[] }
|{ type: 'setFichas', payload: FichaHexagonal<Color>[] }
|{ type: 'setPoints', payload: number }
|{ type: 'toggleHammer' }
|{ type: 'toggleDelete' }
|{ type: 'gameOver' }

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
        case 'gameOver':
            return {
                ...state,
                gameOver: true
            }
        default:
            return state;
    }
};