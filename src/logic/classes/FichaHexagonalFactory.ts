import { Factory } from '../interfaces';
import { RotationTriangular } from '../types';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonalFactory<V> implements Factory<FichaHexagonal<V>>{
    private readonly _maxNumberOfPiezas: number = 5;
    private readonly _maxNumberOfRotations: number = 6;

    constructor(
        private readonly _possibleValues: V[],
        private readonly _sameValues: boolean = true
    ) { }

    public generate(): FichaHexagonal<V> {

        const numberOfPiezas = Math.floor(Math.random() * (this._maxNumberOfPiezas)) + 1;
        
        const rotationStage = numberOfPiezas === 1 
        ? Math.floor(Math.random() * 2) + 1
        : Math.floor(Math.random() * (this._maxNumberOfRotations)) + 1;

        const ficha = new FichaHexagonal<V>(rotationStage);

        const piezas: PiezaTriangular<V>[] = [];
        let value: V = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];

        let rotacion: RotationTriangular = numberOfPiezas <= 2 ? 
        rotationStage % 2 === 1 ? 'VERTEXUP' : 'VERTEXDOWN' :
        rotationStage % 2 === 1 ? 'VERTEXDOWN' : 'VERTEXUP';

        for(let i = 1; i <= numberOfPiezas; i++){
            piezas.push(new PiezaTriangular(value, rotacion, new Map()));
            rotacion = (rotacion === 'VERTEXUP') ? 'VERTEXDOWN' : 'VERTEXUP';
            if(!this._sameValues) value = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];
        }

        ficha.piezas = piezas;
        ficha.updateAdyacentes();
        return ficha;
    }

}