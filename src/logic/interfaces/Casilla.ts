import { PiezaType } from './';

export interface CasillaType<V = any> {
    value?: V;
    canInsert(pieza: PiezaType<V>): boolean;
    insertPieza(pieza: PiezaType<V>): void;
    estaVacia(): boolean;
    vaciar(): void;
}