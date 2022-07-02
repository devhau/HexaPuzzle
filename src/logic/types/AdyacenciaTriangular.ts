import { RotationTriangular } from './RotationTriangular';

type TriangularShape = {
    adyacentes: AdyacenciaTriangular;
    rotacion: RotationTriangular;
}

export type AdyacenciaTriangular = {
    top?: TriangularShape,
    bottom?: TriangularShape,
    left?: TriangularShape,
    right?: TriangularShape 
}