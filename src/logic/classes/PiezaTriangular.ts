import { Pieza } from './Pieza';
import { Color } from '../types';
import { TriangularShape } from './TriangularShape';

export class PiezaTriangular extends Pieza<TriangularShape> {

    constructor(color: Color, shape: TriangularShape) {
        super(color,shape);
    }

    public rotar(): void {
        this.rotacion = this.rotacion === 'VERTEXUP' ? 'VERTEXDOWN' : 'VERTEXUP';
    }
    
}