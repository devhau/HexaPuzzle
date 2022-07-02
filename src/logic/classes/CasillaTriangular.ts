import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { Casilla } from './Casilla';
import { PiezaTriangular } from './PiezaTriangular';

export class CasillaTriangular extends Casilla<AdyacenciaTriangular,RotationTriangular>{
    
    constructor(casillaProps: {id: number,rotacion: RotationTriangular,adyacentes?: AdyacenciaTriangular}) {
        super(casillaProps);
    }
    
    public puedeInsertar(pieza: PiezaTriangular): boolean {
        return true;
    }

    public insertar(pieza: PiezaTriangular): void {
        
    }
}