import { Pieza } from './Pieza';
import { RotationTriangular,AdyacenciaTriangular } from '../types';

export class PiezaTriangular extends Pieza<AdyacenciaTriangular,RotationTriangular> {

    constructor(piezaArgs: {rotacion: RotationTriangular,adyacentes?: AdyacenciaTriangular}) {
        super(piezaArgs);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}