import { Factory } from '../interfaces';
import { RotationTriangular } from '../types';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonalFactory<V> implements Factory<FichaHexagonal<V>>{
    private readonly _maxNumberOfPiezas: number = 6;

    constructor(
        private readonly _possibleValues: V[],
        private readonly _sameValues: boolean = true
    ) { }

    public generate(): FichaHexagonal<V> {
        const numberOfPiezas = Math.floor(Math.random() * (this._maxNumberOfPiezas-1)) + 1;
        const ficha = new FichaHexagonal<V>(numberOfPiezas as 1 | 2 | 3 | 4 | 5);
        ficha.piezas = this.generatePiezas(ficha);
        ficha.updateAdyacentes();
        return ficha;
    }

    private generatePiezas(ficha: FichaHexagonal<V>): PiezaTriangular<V>[] {
        const piezas: PiezaTriangular<V>[] = [];
        let value: V = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];

        if(ficha.numberOfPiezas === 1){
            piezas.push(new PiezaTriangular(value, 'VERTEXUP', new Map()));
            return piezas;
        }

        let rotacion: RotationTriangular = ficha.numberOfPiezas === 2 ? 'VERTEXUP' : 'VERTEXDOWN';
        for(let i = 1; i <= ficha.numberOfPiezas; i++){
            piezas.push(new PiezaTriangular(value, rotacion, new Map()));
            rotacion = (rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
            if(!this._sameValues) value = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];
        }
        return piezas;
    }
}