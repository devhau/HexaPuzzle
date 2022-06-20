import { Color } from '../types';
import { Pieza } from './';

export abstract class Ficha<PiezaType extends Pieza<RotationType,PositionType,AdyacenciaType>, RotationType, PositionType, AdyacenciaType > {
    protected piezas: PiezaType[] = [];
    public abstract rotar(): void;

    constructor(protected readonly color: Color) { }
}