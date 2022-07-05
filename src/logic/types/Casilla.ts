import { CasillaRestriction } from '../classes/CasillaRestriction';
import { Color } from './Color';
import { PiezaType } from './Pieza';

export type CasillaType = {
    adyacentes: any;
    color?: Color;
    id: number;
    restrictions: CasillaRestriction[];
    rotacion: any;
    canInsert(pieza: PiezaType): boolean;
    insertPieza(pieza: PiezaType): void;
    estaVacia(): boolean;
    vaciar(): void;
}