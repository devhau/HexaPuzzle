import { AdyacenciaTriangular, CasillaProps, RotationTriangular } from '../types';
import { Casilla } from './Casilla';

export class CasillaTriangular extends Casilla<AdyacenciaTriangular<CasillaTriangular>,RotationTriangular>{
    constructor(casillaProps: CasillaProps<AdyacenciaTriangular<CasillaTriangular>,RotationTriangular>) {
        super(casillaProps);
        this.adyacentes = {
            adyUp: null,
            adyBottom: null,
            adyLeft: null,
            adyRight: null
        }
    }
}