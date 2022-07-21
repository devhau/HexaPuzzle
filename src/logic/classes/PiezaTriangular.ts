import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { Pieza } from './Pieza';

export class PiezaTriangular<V> extends Pieza<AdyacenciaTriangular,RotationTriangular,V> {

    constructor(rotacion: RotationTriangular, adyacentes: Map<AdyacenciaTriangular,PiezaTriangular<V>>,value?: V) {
        super(rotacion,adyacentes,value);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}