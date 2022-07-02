import { Factory } from '../interfaces';
import { FichaType } from '../types';

export abstract class FichaFactory<F extends FichaType> implements Factory<F> {
    public abstract generate(): F;
    constructor(protected readonly numberOfPiezas: number) { }
}