import { Pieza } from './Pieza';
import { TriangularShape } from './TriangularShape';

export class PiezaTriangular<V> extends Pieza<TriangularShape,V> {

    constructor(value: V, shape: TriangularShape) {
        super(value,shape);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}