import { Casilla } from './Casilla';
import { Pieza } from './Pieza';
import { TriangularShape } from './TriangularShape';

export class CasillaTriangular extends Casilla<TriangularShape>{
    
    constructor(id: number, shape: TriangularShape) {
        super(id,shape);
    }
    
    public canInsert(pieza: Pieza<TriangularShape>,visitados: CasillaTriangular[] = []): boolean {
        if(!this.estaVacia()) return false;
        if(this.rotacion !== pieza.rotacion) return false;
        visitados.push(this);
        let encaja: boolean = true;
        for(let adyacente of Object.keys(pieza.adyacentes)) {
            if(adyacente === 'bottom' || adyacente === 'top' || adyacente === 'left' || adyacente === 'right') {
                if(visitados.includes(this.adyacentes[adyacente])) continue;
                if(!this.adyacentes[adyacente]){encaja = false; break;}
                encaja = this.adyacentes[adyacente].canInsert(pieza.adyacentes[adyacente],visitados);
                if(!encaja) break;
            }
        }
        return encaja;
    }

    public insertPieza(pieza: Pieza<TriangularShape>): void {
        this.color = pieza.color;
        for(let adyacente of Object.keys(pieza.adyacentes)) {
            if(adyacente === 'bottom' || adyacente === 'top' || adyacente === 'left' || adyacente === 'right') {
                if(!this.adyacentes[adyacente].color) 
                this.adyacentes[adyacente].insertPieza(pieza.adyacentes[adyacente]);
            }
        }
        this.notify();
    }
}