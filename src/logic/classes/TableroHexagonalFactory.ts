import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { CasillaTriangular } from './CasillaTriangular';
import { TableroFactory } from './TableroFactory';
import { TableroHexagonal } from './TableroHexagonal';

export class TableroHexagonalFactory extends TableroFactory<
    TableroHexagonal,
    CasillaTriangular,
    AdyacenciaTriangular<CasillaTriangular>,
    RotationTriangular
>{

    public generate(): TableroHexagonal {
        return new TableroHexagonal();
    }

}