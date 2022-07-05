export type Event =
| {type: 'insert_pieza', payload: number}
| {type: 'make_hexagon', payload: number}