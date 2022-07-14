import { ShapeType } from '../types';
import { PiezaType } from './';
import { Restriction } from './Restriction';

export interface CasillaType extends ShapeType {
    value?: any;
    id: number;
    restrictions: Restriction[];
    canInsert(pieza: PiezaType): boolean;
    insertPieza(pieza: PiezaType): void;
    estaVacia(): boolean;
    vaciar(): void;
}