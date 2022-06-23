import { Factory } from '../interfaces';
import { Ficha } from './Ficha';
import { Pieza } from './Pieza';

export abstract class FichaFactory<
    FichaType extends Ficha<PiezaType,RotationType,PositionType,AdyacenciaType>, 
    PiezaType extends Pieza<RotationType,PositionType,AdyacenciaType>, 
    RotationType, 
    PositionType, 
    AdyacenciaType
> implements Factory<FichaType> {

    public abstract generate(): FichaType;

    constructor(protected readonly numberOfPiezas: number) { }
}