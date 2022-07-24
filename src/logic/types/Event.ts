import { Comodin,FichaType } from '../interfaces';

export type Event<F extends FichaType = FichaType> =
| {type: 'insert_ficha', payload: F}
| {type: 'remove_ficha', payload: F}
| {type: 'generate_ficha', payload: F}
| {type: 'make_hexagon'}
| {type: 'use_comodin', payload: Comodin<any>}
| {type: 'game_over'}