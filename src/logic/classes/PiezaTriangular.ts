import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { Pieza } from './Pieza';

export class PiezaTriangular<V> extends Pieza<AdyacenciaTriangular,RotationTriangular,V> {

    constructor(value: V, rotacion: RotationTriangular, adyacentes: Map<AdyacenciaTriangular,PiezaTriangular<V>>) {
        super(value,rotacion,adyacentes);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}