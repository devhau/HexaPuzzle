import { Shape } from '../classes/Shape';
import { AdyacenciaTriangular,RotationTriangular } from '../types';

export class TriangularShape extends Shape<AdyacenciaTriangular,RotationTriangular> {
    constructor(rotacion: RotationTriangular, adyacentes: AdyacenciaTriangular) {
        super(rotacion, adyacentes);
    }
}