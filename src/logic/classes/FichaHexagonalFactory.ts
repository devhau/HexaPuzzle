import { AdyacenciaTriangular, Color, PositionHexagonal, RotationTriangular } from '../types';
import { FichaFactory } from './FichaFactory';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonalFactory extends FichaFactory<
    FichaHexagonal,
    PiezaTriangular,
    RotationTriangular,
    PositionHexagonal,
    AdyacenciaTriangular<PiezaTriangular>
>{

    constructor() {
        super(6);
    }

    public generate(): FichaHexagonal {
        const numberOfActivePiezas = Math.floor(Math.random() * (this.numberOfPiezas-1)) + 1;
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
        const ficha = new FichaHexagonal(color!,numberOfActivePiezas);
        ficha.setPiezas(this.generatePiezas(ficha));
        return ficha;
    }

    private generatePiezas(ficha: FichaHexagonal): PiezaTriangular[] {
        const piezas: PiezaTriangular[] = [];

        if(ficha.getNumberOfActivePiezas() === 1){
            piezas.push(new PiezaTriangular({
                active: true,
                position: {} as PositionHexagonal,
                rotacion: 'VERTEXUP',
                adyacentes: {
                    top: undefined,
                    bottom: undefined,
                    left: undefined,
                    right: undefined
                }
            }));
            return piezas;
        }

        for (let i = 1; i <= this.numberOfPiezas; i++) {
            let position = {} as PositionHexagonal;
            (i <= this.numberOfPiezas/2) ? position.y = "TOP" : position.y = "BOTTOM";
            if(i === 1 || i === 4) position.x = "LEFT";
            else if(i === 2 || i === 5) position.x = "CENTER";
            else if(i === 3 || i === 6) position.x = "RIGHT";

            let active: boolean;
            active = true;
            if(ficha.getNumberOfActivePiezas() === 2){
                if(i !== 2 && i !== 5) active = false;
            }else if(ficha.getNumberOfActivePiezas() === 3){
                if(i <= this.numberOfPiezas/2) active = false;
            } else if(ficha.getNumberOfActivePiezas() === 4){
                if(i === 1 || i === 4) active = false;
            }else if(ficha.getNumberOfActivePiezas() === 5){
                if(i === 1) active = false;
            }

            const pieza = new PiezaTriangular({
                position,
                active,
                rotacion: (i % 2) === 0 ? 'VERTEXDOWN' : 'VERTEXUP'
            })
            piezas.push(pieza);
        }
        this.setAdyacentes(piezas);
        return piezas;
    }

    private setAdyacentes(piezas: PiezaTriangular[]) {
        for (let i = 1; i <= piezas.length; i++) {
            const adyacentes: AdyacenciaTriangular<PiezaTriangular> = {
                top: undefined,
                bottom: undefined,
                left: undefined,
                right: undefined
            };

            if(piezas[i-1].getRotacion() === 'VERTEXDOWN'){
                if(i > piezas.length/2){
                    adyacentes.top = piezas[(i-(piezas.length/2))-1];
                }
            }else{
                if(i <= piezas.length/2){
                    adyacentes.bottom = piezas[(i+(piezas.length/2))-1];
                }
            }

            if(i <= piezas.length/2){
                if(i > 1){
                    adyacentes.left = piezas[i-2];
                }
                if(i < piezas.length/2){
                    adyacentes.right = piezas[i];
                }
            }else{
                if(i > (piezas.length/2) + 1){
                    adyacentes.left = piezas[i-2];
                }
                if(i < piezas.length){
                    adyacentes.right = piezas[i];
                }
            }

            piezas[i-1].setAdyacentes(adyacentes);
        }
    }
}