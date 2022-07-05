import { CasillaRestriction } from './CasillaRestriction';
import { RestrictionManager } from './RestrictionManager';
import { CasillaType } from '../types';

export class SameColorRestriction extends CasillaRestriction {

    constructor(casillas: CasillaType[], manager: RestrictionManager<CasillaRestriction>) {
        super(casillas,manager);
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

}