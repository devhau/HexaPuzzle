import { AdyacenciaTriangular, Color, PositionHexagonal, RotationTriangular } from '../types';
import { Ficha } from './Ficha';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonal extends Ficha<PiezaTriangular, RotationTriangular, PositionHexagonal, AdyacenciaTriangular<PiezaTriangular>> {

    constructor(color: Color, private numberOfActivePiezas: number) {
        super(color);
    }

    public rotar(): void {
        
    }

    public getNumberOfActivePiezas = (): number => this.numberOfActivePiezas;

}