import { Factory } from '../interfaces';
import { Casilla } from './Casilla';

type TableroFormat = {
    [rowIndex: number]: number
}

export abstract class TableroFactory<
    CasillaType extends Casilla<AdyacenciaType,RotationType>,
    AdyacenciaType,RotationType
> implements Factory<CasillaType[]>{

    constructor(protected readonly format: TableroFormat) { }

    public abstract generate(): CasillaType[];
}