import { AdyacenciaTriangular, PositionHexagonal, RotationTriangular } from '../types';
import { FichaFactory,FichaHexagonal,PiezaTriangular } from './';

export class FichaHexagonalFactory extends FichaFactory<
    FichaHexagonal,
    PiezaTriangular,
    RotationTriangular,
    PositionHexagonal,
    AdyacenciaTriangular >
{

    constructor() {
        super(6);
    }

    public generate(): FichaHexagonal {
        return new FichaHexagonal('amarillo');
    }
}