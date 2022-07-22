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

        let numberOfPiezas = Math.floor(Math.random() * (this._maxNumberOfPiezas)) + 1;
        const hasSpaces: boolean = (numberOfPiezas === 2 || numberOfPiezas === 3) && Math.random() <= 0.35;

        let rotationStage = numberOfPiezas === 1 || (numberOfPiezas === 3 && hasSpaces)
        ? Math.floor(Math.random() * 2) + 1
        : Math.floor(Math.random() * (this._maxNumberOfRotations)) + 1;

        const piezasValues: V[] = [];
        let value: V = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];

        if(hasSpaces) numberOfPiezas = numberOfPiezas === 2 ? 3 : 6;

        for(let i = 1; i <= numberOfPiezas; i++){
            if(hasSpaces){
                if(numberOfPiezas === 3 && i === 2) continue;
                else if(numberOfPiezas === 6 && i % 2 === 1) continue;
            }
            piezasValues[i-1] = value;
            if(!this._sameValues) value = this._possibleValues[Math.floor(Math.random() * this._possibleValues.length)];
        }

        return new FichaHexagonal<V>(rotationStage,piezasValues,hasSpaces);

    }

}