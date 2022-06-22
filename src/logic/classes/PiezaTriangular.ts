import { Pieza } from './';
import { RotationTriangular,PositionHexagonal,AdyacenciaTriangular } from '../types';

type Props<AdyacenciaType,PositionType,RotationType> = {
    active: boolean,
    adyacentes: AdyacenciaType, 
    position: PositionType, 
    rotacion: RotationType
}

export class PiezaTriangular extends Pieza<RotationTriangular,PositionHexagonal,AdyacenciaTriangular> {

    constructor(piezaProps: Props<AdyacenciaTriangular,PositionHexagonal,RotationTriangular>) {
        super(piezaProps);
    }
    
}