import { Factory } from '../interfaces';
import { Casilla } from './Casilla';
import { Tablero } from './Tablero';

export abstract class TableroFactory<
    TableroType extends Tablero<CasillaType,AdyacenciaType,RotationType>,
    CasillaType extends Casilla<AdyacenciaType,RotationType>,
    AdyacenciaType,RotationType
> implements Factory<TableroType>{

    constructor(protected readonly numberOfCasillas: number) { }

    public abstract generate(): TableroType;
}