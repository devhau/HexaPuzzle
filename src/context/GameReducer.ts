import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { GameState } from './';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

type GameAction =
|{ type: 'setTablero', payload: CasillaTriangular[] }
|{ type: 'setFichas', payload: FichaHexagonal[] }

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
        default:
            return state;
    }
};