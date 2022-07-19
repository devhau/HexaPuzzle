import { Factory } from '../interfaces';
import { FichaHexagonal } from './FichaHexagonal';

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

        const piezasValues: V[] = [];
        let value: V = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];
        for(let i = 1; i <= numberOfPiezas; i++){
            piezasValues.push(value);
            if(!this._sameValues) value = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];
        }
        
        return new FichaHexagonal<V>(rotationStage,piezasValues);

    }

}