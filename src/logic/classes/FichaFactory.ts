import { Factory } from '../interfaces';
import { Ficha } from './Ficha';
import { Pieza } from './Pieza';

export abstract class FichaFactory<
    FichaType extends Ficha<PiezaType,RotationType,AdyacenciaType>, 
    PiezaType extends Pieza<RotationType,AdyacenciaType>, 
    RotationType, 
    AdyacenciaType
> implements Factory<FichaType> {

    public abstract generate(): FichaType;

    constructor(protected readonly numberOfPiezas: number) { }
}