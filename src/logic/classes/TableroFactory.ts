import { CasillaType } from '../types';
import { Factory } from '../interfaces';

type TableroFormat = {
    [rowIndex: number]: number
}

export abstract class TableroFactory<C extends CasillaType> implements Factory<C[]>{

    constructor(protected readonly format: TableroFormat) { }

    public abstract generate(): C[];
}