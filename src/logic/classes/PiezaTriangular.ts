import { Pieza } from './Pieza';
import { RotationTriangular,AdyacenciaTriangular, PiezaProps } from '../types';

export class PiezaTriangular extends Pieza<RotationTriangular,AdyacenciaTriangular<PiezaTriangular>> {

    constructor(piezaProps: PiezaProps<AdyacenciaTriangular<PiezaTriangular>,RotationTriangular>) {
        super(piezaProps);
    }

    public rotar(): void {
        this.rotacion = (this.rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}