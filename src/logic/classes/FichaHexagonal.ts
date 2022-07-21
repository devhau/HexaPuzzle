import { RotationTriangular } from '../types';
import { Ficha } from './Ficha';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonal<V> extends Ficha<V,PiezaTriangular<V>> {
    
    constructor(rotationStage: number, piezasValues: V[], hasSpaces: boolean) {
        super(rotationStage,piezasValues,hasSpaces);
    }

    public rotar(): void {
        this.piezas.forEach(pieza => {
            pieza.rotar();
            pieza.adyacentes.clear();
        });
        this._rotationStage++;
        if(this.rotationStage > this.possibleRotations) this._rotationStage = 1;
        this.updateAdyacentes();
    }

    protected setPiezas(piezasValues: V[]): void {
        this.piezas = [];

        let rotacion: RotationTriangular = 
        (piezasValues.length <= 2 && !this._hasSpaces) || (piezasValues.length === 6 && this._hasSpaces) ? 
        this._rotationStage % 2 === 1 ? 'VERTEXUP' : 'VERTEXDOWN' :
        this._rotationStage % 2 === 1 ? 'VERTEXDOWN' : 'VERTEXUP';

        for(let i = 0; i < piezasValues.length; i++){
            this.piezas.push(new PiezaTriangular(rotacion, new Map(),piezasValues[i]));
            rotacion = (rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
        }

    }

    protected updateAdyacentes(): void {
        if(this.numberOfPiezas === 2 && !this._hasSpaces){
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
        }else if((this.numberOfPiezas === 3 && !this._hasSpaces) || (this.numberOfPiezas === 2 && this._hasSpaces)){
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
        }else if(this.numberOfPiezas === 3 && this._hasSpaces){
            if(this.rotationStage === 1){
                this.piezas[0].addAdyacente('right',this.piezas[1]);
                this.piezas[0].addAdyacente('bottom',this.piezas[5]);
                this.piezas[1].addAdyacente('left',this.piezas[0]);
                this.piezas[1].addAdyacente('right',this.piezas[2]);
                this.piezas[2].addAdyacente('left',this.piezas[1]);
                this.piezas[2].addAdyacente('bottom',this.piezas[3]);
                this.piezas[3].addAdyacente('top',this.piezas[2]);
                this.piezas[3].addAdyacente('left',this.piezas[4]);
                this.piezas[4].addAdyacente('right',this.piezas[3]);
                this.piezas[4].addAdyacente('left',this.piezas[5]);
                this.piezas[5].addAdyacente('right',this.piezas[4]);
                this.piezas[5].addAdyacente('top',this.piezas[0]);
            }else{
                this.piezas[0].addAdyacente('right',this.piezas[1]);
                this.piezas[0].addAdyacente('left',this.piezas[5]);
                this.piezas[1].addAdyacente('left',this.piezas[0]);
                this.piezas[1].addAdyacente('bottom',this.piezas[2]);
                this.piezas[2].addAdyacente('top',this.piezas[1]);
                this.piezas[2].addAdyacente('left',this.piezas[3]);
                this.piezas[3].addAdyacente('right',this.piezas[2]);
                this.piezas[3].addAdyacente('left',this.piezas[4]);
                this.piezas[4].addAdyacente('right',this.piezas[3]);
                this.piezas[4].addAdyacente('top',this.piezas[5]);
                this.piezas[5].addAdyacente('bottom',this.piezas[4]);
                this.piezas[5].addAdyacente('right',this.piezas[0]);
            }
        }
    }

    get possibleRotations(): number {
        return this.numberOfPiezas === 1 || (this.numberOfPiezas === 3 && this._hasSpaces)
        ? 2 : 6;
    }

}