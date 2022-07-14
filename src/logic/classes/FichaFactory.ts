import { Factory } from '../interfaces';
import { FichaType } from '../types';

export abstract class FichaFactory<F extends FichaType,V> implements Factory<F> {
    public abstract generate(): F;
    constructor(
        protected readonly maxNumberOfPiezas: number, 
        protected readonly possibleValues: V[]
    ) { }
}