import { Tablero } from './Tablero';
import { CasillaTriangular } from './CasillaTriangular';
import { AdyacenciaTriangular, RotationTriangular } from '../types';

export class TableroHexagonal extends Tablero<
    CasillaTriangular,
    AdyacenciaTriangular<CasillaTriangular>,RotationTriangular
>{
    
}