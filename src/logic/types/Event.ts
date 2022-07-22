import { Comodin } from '../interfaces';
import { FichaType } from './Ficha';

export type Event =
| {type: 'insert_ficha', payload: FichaType}
| {type: 'make_hexagon'}
| {type: 'use_comodin', payload: Comodin}
| {type: 'game_over'}