import { Condition,CasillaType } from '../interfaces';

export class SameValueCondition<V> implements Condition{

    constructor(private _casillas: CasillaType<V>[]) {
        if(_casillas.length < 2) throw new Error('SameValueCondition requiere al menos 2 casillas');
    }

    get cumple(): boolean {
        return this.haveSameValue();
    }

    private haveSameValue(): boolean {
        const value = this._casillas[0].value;
        if(!value) return false;
        return this._casillas.every(casilla => casilla.value === value);
    }

    public action(): void {
        this._casillas.forEach(casilla => casilla.vaciar());
    }

}