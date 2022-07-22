import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { FichaHexagonal } from './FichaHexagonal';
import { Pieza } from './Pieza';

export class PiezaTriangular<V> extends Pieza<AdyacenciaTriangular,RotationTriangular,V> {

    constructor(rotacion: RotationTriangular, adyacentes: Map<AdyacenciaTriangular,PiezaTriangular<V>>,container: FichaHexagonal<V>,value?: V) {
        super(rotacion,adyacentes,container,value);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}