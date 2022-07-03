import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { Casilla } from './Casilla';
import { PiezaTriangular } from './PiezaTriangular';

export class CasillaTriangular extends Casilla<AdyacenciaTriangular,RotationTriangular>{
    
    constructor(casillaProps: {id: number,rotacion: RotationTriangular,adyacentes?: AdyacenciaTriangular}) {
        super(casillaProps);
    }
    
    public canInsert(pieza: PiezaTriangular,visitados: CasillaTriangular[] = []): boolean {
        if(!this.estaVacia()) return false;
        if(this.rotacion !== pieza.rotacion) return false;
        visitados.push(this);
        let encaja: boolean = true;
        for(let adyacente of Object.keys(pieza.adyacentes)) {
            if(adyacente === 'bottom' || adyacente === 'top' || adyacente === 'left' || adyacente === 'right') {
                if(visitados.includes(this.adyacentes[adyacente])) continue;
                encaja = this.adyacentes[adyacente].canInsert(pieza.adyacentes[adyacente],visitados);
                if(!encaja) break;
            }
        }
        return encaja;
    }

    public insertPieza(pieza: PiezaTriangular): void {
        this.color = pieza.color;
        for(let adyacente of Object.keys(pieza.adyacentes)) {
            if(adyacente === 'bottom' || adyacente === 'top' || adyacente === 'left' || adyacente === 'right') {
                if(!this.adyacentes[adyacente].color) 
                this.adyacentes[adyacente].insertPieza(pieza.adyacentes[adyacente]);
            }
        }
    }
}