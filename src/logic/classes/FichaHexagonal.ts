import { AdyacenciaTriangular, Color, PositionHexagonal, RotationTriangular } from '../types';
import { Ficha,PiezaTriangular } from './';

export class FichaHexagonal extends Ficha<PiezaTriangular, RotationTriangular, PositionHexagonal, AdyacenciaTriangular> {

    constructor(color: Color) {
        super(color);
    }

    public rotar(): void {
        
    }
}