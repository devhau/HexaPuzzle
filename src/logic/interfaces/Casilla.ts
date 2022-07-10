import { Color, ShapeType } from '../types';
import { PiezaType } from './';
import { Restriction } from './Restriction';

export interface CasillaType extends ShapeType {
    color?: Color;
    id: number;
    restrictions: Restriction[];
    canInsert(pieza: PiezaType): boolean;
    insertPieza(pieza: PiezaType): void;
    estaVacia(): boolean;
    vaciar(): void;
}