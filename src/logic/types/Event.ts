import { Comodin } from '../interfaces';

export type Event =
| {type: 'insert_ficha', payload: number}
| {type: 'make_hexagon'}
| {type: 'use_comodin', payload: Comodin}
| {type: 'game_over'}