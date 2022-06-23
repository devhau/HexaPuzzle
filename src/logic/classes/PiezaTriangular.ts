import { Pieza } from './Pieza';
import { RotationTriangular,PositionHexagonal,AdyacenciaTriangular, PiezaProps } from '../types';

export class PiezaTriangular extends Pieza<RotationTriangular,PositionHexagonal,AdyacenciaTriangular<PiezaTriangular>> {

    constructor(piezaProps: PiezaProps<AdyacenciaTriangular<PiezaTriangular>,PositionHexagonal,RotationTriangular>) {
        super(piezaProps);
    }
    
}