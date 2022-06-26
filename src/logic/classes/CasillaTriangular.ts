import { AdyacenciaTriangular, CasillaProps, RotationTriangular } from '../types';
import { Casilla } from './Casilla';

export class CasillaTriangular extends Casilla<AdyacenciaTriangular<CasillaTriangular>,RotationTriangular>{
    constructor(casillaProps: CasillaProps<AdyacenciaTriangular<CasillaTriangular>,RotationTriangular>) {
        super(casillaProps);
        this.adyacentes = {
            top: undefined,
            bottom: undefined,
            left: undefined,
            right: undefined
        }
    }
}