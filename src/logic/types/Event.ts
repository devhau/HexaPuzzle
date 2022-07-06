import { Comodin } from '../interfaces';

export type Event =
| {type: 'insert_pieza', payload: number}
| {type: 'make_hexagon', payload: number}
| {type: 'use_comodin', payload: Comodin}