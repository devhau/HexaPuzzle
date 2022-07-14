import { RotationTriangular } from '../types';
import { FichaFactory } from './FichaFactory';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';
import { TriangularShape } from './TriangularShape';

export class FichaHexagonalFactory<V> extends FichaFactory<FichaHexagonal<V>,V>{

    constructor(possibleValues: V[],private sameValues: boolean = true) {
        super(6,possibleValues);
    }

    public generate(): FichaHexagonal<V> {
        const numberOfPiezas = Math.floor(Math.random() * (this.maxNumberOfPiezas-1)) + 1;
        const ficha = new FichaHexagonal<V>(numberOfPiezas as 1 | 2 | 3 | 4 | 5);
        ficha.piezas = this.generatePiezas(ficha);
        return ficha;
    }

    private generatePiezas(ficha: FichaHexagonal<V>): PiezaTriangular<V>[] {
        const piezas: PiezaTriangular<V>[] = [];
        let value: V = this.possibleValues[Math.floor(Math.random() * this.possibleValues.length)];

        if(ficha.numberOfPiezas === 1){
            piezas.push(new PiezaTriangular(value, new TriangularShape('VERTEXUP',{})));
            return piezas;
        }

        let rotacion: RotationTriangular = ficha.numberOfPiezas === 2 ? 'VERTEXUP' : 'VERTEXDOWN';
        for(let i = 1; i <= ficha.numberOfPiezas; i++){
            piezas.push(new PiezaTriangular(value, new TriangularShape(rotacion,{})));
            rotacion = (rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
            if(!this.sameValues) value = this.possibleValues[Math.floor(Math.random() * this.possibleValues.length)];
        }

        this.setAdyacentes(piezas);
        return piezas;
    }

    private setAdyacentes(piezas: PiezaTriangular<V>[]): void {
        switch(piezas.length){
            case 2:
                piezas[0].adyacentes = {bottom: piezas[1]};
                piezas[1].adyacentes = {top: piezas[0]};
            break;
            case 3:
                piezas[0].adyacentes = {right: piezas[1]};
                piezas[1].adyacentes = {left: piezas[0], right: piezas[2]};
                piezas[2].adyacentes = {left: piezas[1]};
            break;
            case 4:
                piezas[0].adyacentes = {right: piezas[1]};
                piezas[1].adyacentes = {left: piezas[0], bottom: piezas[2]};
                piezas[2].adyacentes = {top: piezas[1], left: piezas[3]};
                piezas[3].adyacentes = {right: piezas[2]};
            break;
            case 5:
                piezas[0].adyacentes = {right: piezas[1]};
                piezas[1].adyacentes = {left: piezas[0], bottom: piezas[2]};
                piezas[2].adyacentes = {top: piezas[1], left: piezas[3]};
                piezas[3].adyacentes = {right: piezas[2], left: piezas[4]};
                piezas[4].adyacentes = {right: piezas[3]};
            break;
        }
    }
}