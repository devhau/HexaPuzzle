import { Color } from './Color';
import { PiezaType } from './Pieza';

export type CasillaType = {
    adyacentes: any;
    color?: Color;
    id: number;
    rotacion: any;
    puedeInsertar(pieza: PiezaType): boolean;
    insertar(pieza: PiezaType): void;
    estaVacia(): boolean;
}