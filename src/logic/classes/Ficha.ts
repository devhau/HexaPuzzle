import { Color } from '../types';
import { Pieza } from './Pieza';

export abstract class Ficha<PiezaType extends Pieza<RotationType,PositionType,AdyacenciaType>, RotationType, PositionType, AdyacenciaType > {
    protected piezas: PiezaType[] = [];
    
    constructor(protected readonly color: Color) { }

    public getColor = () => this.color;
    public abstract rotar(): void;
}