import { FichaType } from '../interfaces';
import { CasillaType } from './Casilla';

export interface Factory<T>{
    generate(): T;
}

export interface GameFactory<F extends FichaType, C extends CasillaType>{
    generateFicha(): F;
    generateTablero(): C[];
}