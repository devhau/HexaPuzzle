import { Color } from '../types';
import { Ficha } from './Ficha';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonal extends Ficha<PiezaTriangular> {
    private _rotationStage: 1 | 2 | 3 | 4 | 5 | 6 = 1;

    constructor(color: Color, private readonly _numberOfPiezas: 1 | 2 | 3 | 4 | 5) {
        super(color);
    }
 
    get numberOfPiezas(){
        return this._numberOfPiezas;
    }

    get rotationStage() {
        return this._rotationStage;
    };

    public rotar(): void {
        if(this.numberOfPiezas === 1){
            this.piezas[0].rotar();
            this._rotationStage++;
            if(this.rotationStage > 2) this._rotationStage = 1;
            return;
        }
        this._rotationStage++;
        if(this.rotationStage > 6) this._rotationStage = 1;

        this.piezas.forEach(pieza => {
            pieza.rotar();
            pieza.adyacentes = {};
        });
        this.updateAdyacentes();
    }

    private updateAdyacentes(){
        if(this.numberOfPiezas === 2){
            if(this.rotationStage === 1){
                this.piezas[0].adyacentes = {bottom: this.piezas[1]};
                this.piezas[1].adyacentes = {top: this.piezas[0]};
            }else if(this.rotationStage === 2 || this.rotationStage === 3){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0]};
            }else if(this.rotationStage === 4){
                this.piezas[0].adyacentes = {top: this.piezas[1]};
                this.piezas[1].adyacentes = {bottom: this.piezas[0]};
            }else if(this.rotationStage === 5 || this.rotationStage === 6){
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0]};
            }
            return;
        }

        if(this.numberOfPiezas === 3){
            if(this.rotationStage === 1){
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[1]};
            }else if(this.rotationStage === 2){
                this.piezas[0].adyacentes = {bottom: this.piezas[1]};
                this.piezas[1].adyacentes = {top: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[1]};
            }else if(this.rotationStage === 3){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], bottom: this.piezas[2]};
                this.piezas[2].adyacentes = {top: this.piezas[1]};
            }else if(this.rotationStage === 4){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[1]};
            }else if(this.rotationStage === 5){
                this.piezas[0].adyacentes = {top: this.piezas[1]};
                this.piezas[1].adyacentes = {bottom: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[0]};
            }else{
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], top: this.piezas[2]};
                this.piezas[2].adyacentes = {bottom: this.piezas[1]};
            }
            return;
        }

        if(this.numberOfPiezas === 4){
            if(this.rotationStage === 1){
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], bottom: this.piezas[2]};
                this.piezas[2].adyacentes = {top: this.piezas[1], left: this.piezas[3]};
                this.piezas[3].adyacentes = {right: this.piezas[2]};
            }else if(this.rotationStage === 2){
                this.piezas[0].adyacentes = {bottom: this.piezas[1]};
                this.piezas[1].adyacentes = {top: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[1], left: this.piezas[3]};
                this.piezas[3].adyacentes = {right: this.piezas[2]};
            }else if(this.rotationStage === 3){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[1], top: this.piezas[3]};
                this.piezas[3].adyacentes = {bottom: this.piezas[2]};
            }else if(this.rotationStage === 4){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], top: this.piezas[2]};
                this.piezas[2].adyacentes = {bottom: this.piezas[1], right: this.piezas[3]};
                this.piezas[3].adyacentes = {left: this.piezas[2]};
            }else if(this.rotationStage === 5){
                this.piezas[0].adyacentes = {top: this.piezas[1]};
                this.piezas[1].adyacentes = {bottom: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[0], right: this.piezas[3]};
                this.piezas[3].adyacentes = {left: this.piezas[2]};
            }else{
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[1], bottom: this.piezas[3]};
                this.piezas[3].adyacentes = {top: this.piezas[2]};
            }
            return;
        }

        if(this.numberOfPiezas === 5){
            if(this.rotationStage === 1){
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], bottom: this.piezas[2]};
                this.piezas[2].adyacentes = {top: this.piezas[1], left: this.piezas[3]};
                this.piezas[3].adyacentes = {right: this.piezas[2], left: this.piezas[4]};
                this.piezas[4].adyacentes = {right: this.piezas[3]};
            }else if(this.rotationStage === 2){
                this.piezas[0].adyacentes = {bottom: this.piezas[1]};
                this.piezas[1].adyacentes = {top: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[1], left: this.piezas[3]};
                this.piezas[3].adyacentes = {right: this.piezas[2], top: this.piezas[4]};
                this.piezas[4].adyacentes = {bottom: this.piezas[3]};
            }else if(this.rotationStage === 3){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], left: this.piezas[2]};
                this.piezas[2].adyacentes = {right: this.piezas[1], top: this.piezas[3]};
                this.piezas[3].adyacentes = {bottom: this.piezas[2], right: this.piezas[4]};
                this.piezas[4].adyacentes = {left: this.piezas[3]};
            }else if(this.rotationStage === 4){
                this.piezas[0].adyacentes = {left: this.piezas[1]};
                this.piezas[1].adyacentes = {right: this.piezas[0], top: this.piezas[2]};
                this.piezas[2].adyacentes = {bottom: this.piezas[1], right: this.piezas[3]};
                this.piezas[3].adyacentes = {left: this.piezas[2], right: this.piezas[4]};
                this.piezas[4].adyacentes = {left: this.piezas[3]};
            }else if(this.rotationStage === 5){
                this.piezas[0].adyacentes = {top: this.piezas[1]};
                this.piezas[1].adyacentes = {bottom: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[0], right: this.piezas[3]};
                this.piezas[3].adyacentes = {left: this.piezas[2], bottom: this.piezas[4]};
                this.piezas[4].adyacentes = {top: this.piezas[3]};
            }else{
                this.piezas[0].adyacentes = {right: this.piezas[1]};
                this.piezas[1].adyacentes = {left: this.piezas[0], right: this.piezas[2]};
                this.piezas[2].adyacentes = {left: this.piezas[1], bottom: this.piezas[3]};
                this.piezas[3].adyacentes = {top: this.piezas[2], left: this.piezas[4]};
                this.piezas[4].adyacentes = {right: this.piezas[3]};
            }
        }
    }

}