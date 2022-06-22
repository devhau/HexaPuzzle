import { AdyacenciaTriangular, CasillaProps, RotationTriangular } from '../types';
import { Casilla } from './';

export class CasillaTriangular extends Casilla<RotationTriangular,AdyacenciaTriangular>{
    constructor(casillaProps: CasillaProps<AdyacenciaTriangular,RotationTriangular>) {
        super(casillaProps);
    }
}