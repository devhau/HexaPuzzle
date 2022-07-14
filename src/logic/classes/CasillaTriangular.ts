import { Casilla } from './Casilla';
import { Pieza } from './Pieza';
import { TriangularShape } from './TriangularShape';

export class CasillaTriangular<V> extends Casilla<TriangularShape,V>{
    
    constructor(id: number, shape: TriangularShape) {
        super(id,shape);
    }
    
    public canInsert(pieza: Pieza<TriangularShape,V>,visitados: CasillaTriangular<V>[] = []): boolean {
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

    public insertPieza(pieza: Pieza<TriangularShape,V>): void {
        this.value = pieza.value;
        for(let adyacente of Object.keys(pieza.adyacentes)) {
            if(adyacente === 'bottom' || adyacente === 'top' || adyacente === 'left' || adyacente === 'right') {
                if(!this.adyacentes[adyacente].value)
                this.adyacentes[adyacente].insertPieza(pieza.adyacentes[adyacente]);
            }
        }
        this.notify();
    }
}