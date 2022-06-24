import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { GameState } from './';

type GameAction =
|{ type: 'setTablero', payload: CasillaTriangular[] };

export const GameReducer = (state: GameState, action: GameAction) => {
    switch (action.type) {
        case 'setTablero':
            return {
                ...state,
                tablero: action.payload
            }
        default:
            return state;
    }
};