import { Ficha } from './Ficha';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonal<V> extends Ficha<PiezaTriangular<V>> {
    
    constructor(private _rotationStage: number) {
        super();
    }

    get rotationStage() {
        return this._rotationStage;
    };

    get possibleRotations(): number {
        return this.numberOfPiezas === 1 ? 2 : 6;
    }

    public rotar(): void {
        this.piezas.forEach(pieza => {
            pieza.rotar();
            pieza.adyacentes.clear();
        });
        this._rotationStage++;
        if(this.numberOfPiezas === 1){
            if(this.rotationStage > 2) this._rotationStage = 1;
            return;
        }
        if(this.rotationStage > 6) this._rotationStage = 1;
        this.updateAdyacentes();
    }

    public updateAdyacentes(): void {
        if(this.numberOfPiezas === 2){
            if(this.rotationStage === 1){
                this.piezas[0].addAdyacente('bottom',this.piezas[1])
                this.piezas[1].addAdyacente('top',this.piezas[0])
            }else if(this.rotationStage === 2 || this.rotationStage === 3){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
            }else if(this.rotationStage === 4){
                this.piezas[0].addAdyacente('top',this.piezas[1])
                this.piezas[1].addAdyacente('bottom',this.piezas[0])
            }else if(this.rotationStage === 5 || this.rotationStage === 6){
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
            }
        }else if(this.numberOfPiezas === 3){
            if(this.rotationStage === 1){
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
            }else if(this.rotationStage === 2){
                this.piezas[0].addAdyacente('bottom',this.piezas[1])
                this.piezas[1].addAdyacente('top',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
            }else if(this.rotationStage === 3){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('bottom',this.piezas[2])
                this.piezas[2].addAdyacente('top',this.piezas[1])
            }else if(this.rotationStage === 4){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
            }else if(this.rotationStage === 5){
                this.piezas[0].addAdyacente('top',this.piezas[1])
                this.piezas[1].addAdyacente('bottom',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
            }else{
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('top',this.piezas[2])
                this.piezas[2].addAdyacente('bottom',this.piezas[1])
            }
        }else if(this.numberOfPiezas === 4){
            if(this.rotationStage === 1){
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('bottom',this.piezas[2])
                this.piezas[2].addAdyacente('top',this.piezas[1])
                this.piezas[2].addAdyacente('left',this.piezas[3])
                this.piezas[3].addAdyacente('right',this.piezas[2])
            }else if(this.rotationStage === 2){
                this.piezas[0].addAdyacente('bottom',this.piezas[1])
                this.piezas[1].addAdyacente('top',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
                this.piezas[2].addAdyacente('left',this.piezas[3])
                this.piezas[3].addAdyacente('right',this.piezas[2])
            }else if(this.rotationStage === 3){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
                this.piezas[2].addAdyacente('top',this.piezas[3])
                this.piezas[3].addAdyacente('bottom',this.piezas[2])
            }else if(this.rotationStage === 4){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('top',this.piezas[2])
                this.piezas[2].addAdyacente('bottom',this.piezas[1])
                this.piezas[2].addAdyacente('right',this.piezas[3])
                this.piezas[3].addAdyacente('left',this.piezas[2])
            }else if(this.rotationStage === 5){
                this.piezas[0].addAdyacente('top',this.piezas[1])
                this.piezas[1].addAdyacente('bottom',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
                this.piezas[2].addAdyacente('right',this.piezas[3])
                this.piezas[3].addAdyacente('left',this.piezas[2])
            }else{
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
                this.piezas[2].addAdyacente('bottom',this.piezas[3])
                this.piezas[3].addAdyacente('top',this.piezas[2])
            }
        }else if(this.numberOfPiezas === 5){
            if(this.rotationStage === 1){
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('bottom',this.piezas[2])
                this.piezas[2].addAdyacente('top',this.piezas[1])
                this.piezas[2].addAdyacente('left',this.piezas[3])
                this.piezas[3].addAdyacente('right',this.piezas[2])
                this.piezas[3].addAdyacente('left',this.piezas[4])
                this.piezas[4].addAdyacente('right',this.piezas[3])
            }else if(this.rotationStage === 2){
                this.piezas[0].addAdyacente('bottom',this.piezas[1])
                this.piezas[1].addAdyacente('top',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
                this.piezas[2].addAdyacente('left',this.piezas[3])
                this.piezas[3].addAdyacente('right',this.piezas[2])
                this.piezas[3].addAdyacente('top',this.piezas[4])
                this.piezas[4].addAdyacente('bottom',this.piezas[3])
            }else if(this.rotationStage === 3){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('left',this.piezas[2])
                this.piezas[2].addAdyacente('right',this.piezas[1])
                this.piezas[2].addAdyacente('top',this.piezas[3])
                this.piezas[3].addAdyacente('bottom',this.piezas[2])
                this.piezas[3].addAdyacente('right',this.piezas[4])
                this.piezas[4].addAdyacente('left',this.piezas[3])
            }else if(this.rotationStage === 4){
                this.piezas[0].addAdyacente('left',this.piezas[1])
                this.piezas[1].addAdyacente('right',this.piezas[0])
                this.piezas[1].addAdyacente('top',this.piezas[2])
                this.piezas[2].addAdyacente('bottom',this.piezas[1])
                this.piezas[2].addAdyacente('right',this.piezas[3])
                this.piezas[3].addAdyacente('left',this.piezas[2])
                this.piezas[3].addAdyacente('right',this.piezas[4])
                this.piezas[4].addAdyacente('left',this.piezas[3])
            }else if(this.rotationStage === 5){
                this.piezas[0].addAdyacente('top',this.piezas[1])
                this.piezas[1].addAdyacente('bottom',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
                this.piezas[2].addAdyacente('right',this.piezas[3])
                this.piezas[3].addAdyacente('left',this.piezas[2])
                this.piezas[3].addAdyacente('bottom',this.piezas[4])
                this.piezas[4].addAdyacente('top',this.piezas[3])
            }else{
                this.piezas[0].addAdyacente('right',this.piezas[1])
                this.piezas[1].addAdyacente('left',this.piezas[0])
                this.piezas[1].addAdyacente('right',this.piezas[2])
                this.piezas[2].addAdyacente('left',this.piezas[1])
                this.piezas[2].addAdyacente('bottom',this.piezas[3])
                this.piezas[3].addAdyacente('top',this.piezas[2])
                this.piezas[3].addAdyacente('left',this.piezas[4])
                this.piezas[4].addAdyacente('right',this.piezas[3])
            }
        }
    }
}