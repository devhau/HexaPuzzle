import { Event } from '../types';
import { CasillaType, Manager, Restriction } from '../interfaces';

export class SameColorRestriction implements Restriction {

    private _processingCheck: boolean = false;

    constructor(private _casillas: CasillaType[], private _manager: Manager) { }

    public update(): void {
        if(this._processingCheck || !this.cumple) return;
        this._processingCheck = true;
        setTimeout(() => {
            this._manager.check();
            this._processingCheck = false;
        },100);
    }

    get cumple(): boolean {
        return this.isSameColor();
    }

    private isSameColor(): boolean {
        return this.casillas.every(casilla => casilla.color === 'azul')
        || this.casillas.every(casilla => casilla.color === 'rojo')
        || this.casillas.every(casilla => casilla.color === 'naranja')
        || this.casillas.every(casilla => casilla.color === 'cyan')
        || this.casillas.every(casilla => casilla.color === 'morado');
    }

    public triggerAction(): void {
        this.vaciarCasillas();
    }

    private vaciarCasillas(){
        this._casillas.forEach(casilla => casilla.vaciar());
    }

    get eventType(): Event['type'] {
        return 'make_hexagon';
    }

    get casillas(){
        return this._casillas;
    }

}