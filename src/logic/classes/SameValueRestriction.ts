import { Event } from '../types';
import { CasillaType, Restriction } from '../interfaces';

export class SameValueRestriction<V> implements Restriction<Event> {

    constructor(private _casillas: CasillaType<V>[]) { }

    get cumple(): boolean {
        return this.isSameValue();
    }

    private isSameValue(): boolean {
        const value = this._casillas[0].value;
        if(!value) return false;
        return this._casillas.every(casilla => casilla.value === value);
    }

    public triggerAction(): void {
        this._casillas.forEach(casilla => casilla.vaciar());
    }

    get event(): Event {
        return {
            type: 'make_hexagon'
        }
    }

    get casillas(){
        return this._casillas;
    }

}