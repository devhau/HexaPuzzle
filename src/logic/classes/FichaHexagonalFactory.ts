import { Color, RotationTriangular } from '../types';
import { FichaFactory } from './FichaFactory';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';
import { TriangularShape } from './TriangularShape';

export class FichaHexagonalFactory extends FichaFactory<FichaHexagonal>{

    constructor() {
        super(6);
    }

    public generate(): FichaHexagonal {
        const numberOfPiezas = Math.floor(Math.random() * (this.numberOfPiezas-1)) + 1;
        let color: Color;
        switch(Math.floor(Math.random() * 5) + 1){
            case 1:
                color = 'rojo';
            break;
            case 2:
                color = 'azul';
            break;
            case 3:
                color = 'cyan';
            break;
            case 4:
                color = 'naranja';
            break;
            case 5:
                color = 'morado';
            break;
        }
        const ficha = new FichaHexagonal(color!,numberOfPiezas as 1 | 2 | 3 | 4 | 5);
        ficha.piezas = this.generatePiezas(ficha);
        return ficha;
    }

    private generatePiezas(ficha: FichaHexagonal): PiezaTriangular[] {
        const piezas: PiezaTriangular[] = [];

        if(ficha.numberOfPiezas === 1){
            piezas.push(new PiezaTriangular(ficha.color, new TriangularShape('VERTEXUP',{})));
            return piezas;
        }

        let rotacion: RotationTriangular = ficha.numberOfPiezas === 2 ? 'VERTEXUP' : 'VERTEXDOWN';
        for(let i = 1; i <= ficha.numberOfPiezas; i++){
            piezas.push(new PiezaTriangular(ficha.color, new TriangularShape(rotacion,{})));
            rotacion = (rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
        }

        this.setAdyacentes(piezas);
        return piezas;
    }

    private setAdyacentes(piezas: PiezaTriangular[]): void {
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