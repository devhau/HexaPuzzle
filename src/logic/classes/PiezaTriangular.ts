import { Pieza } from './';
import { RotationTriangular,PositionHexagonal,AdyacenciaTriangular, PiezaProps } from '../types';

export class PiezaTriangular extends Pieza<RotationTriangular,PositionHexagonal,AdyacenciaTriangular> {

    constructor(piezaProps: PiezaProps<AdyacenciaTriangular,PositionHexagonal,RotationTriangular>) {
        super(piezaProps);
    }
    
}