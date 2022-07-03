import { Color } from './Color';
import { PiezaType } from './Pieza';

export type CasillaType = {
    adyacentes: any;
    color?: Color;
    id: number;
    rotacion: any;
    canInsert(pieza: PiezaType): boolean;
    insertPieza(pieza: PiezaType): void;
    estaVacia(): boolean;
}