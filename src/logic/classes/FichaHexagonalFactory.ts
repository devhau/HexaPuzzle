import { AdyacenciaTriangular, PositionHexagonal, RotationTriangular } from '../types';
import { FichaFactory } from './FichaFactory';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonalFactory extends FichaFactory<
    FichaHexagonal,
    PiezaTriangular,
    RotationTriangular,
    PositionHexagonal,
    AdyacenciaTriangular<PiezaTriangular>
>{

    constructor() {
        super(6);
    }

    public generate(): FichaHexagonal {
        return new FichaHexagonal('amarillo');
    }
}