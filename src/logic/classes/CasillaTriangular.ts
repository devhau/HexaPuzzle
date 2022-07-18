import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { Casilla } from './Casilla';
import { Pieza } from './Pieza';

export class CasillaTriangular<V> extends Casilla<AdyacenciaTriangular,RotationTriangular,V>{
    
    constructor(id: number, rotacion: RotationTriangular, adyacentes: Map<AdyacenciaTriangular,CasillaTriangular<V>>) {
        super(id,rotacion,adyacentes);
    }
    
    protected validatePieza(pieza: Pieza<AdyacenciaTriangular,RotationTriangular,V>): boolean {
        return this.estaVacia() && this.rotacion === pieza.rotacion;
    }

    protected consumePieza(pieza: Pieza<AdyacenciaTriangular,RotationTriangular,V>): void {
        this.value = pieza.value;
    }
    
}