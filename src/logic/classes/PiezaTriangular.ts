import { Pieza } from './Pieza';
import { RotationTriangular,AdyacenciaTriangular, Color } from '../types';

export class PiezaTriangular extends Pieza<AdyacenciaTriangular,RotationTriangular> {

    constructor(piezaArgs: {rotacion: RotationTriangular,adyacentes?: AdyacenciaTriangular, color: Color}) {
        super(piezaArgs);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}