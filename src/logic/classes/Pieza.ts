import { PiezaType } from '../types';

export abstract class Pieza<A,R> implements PiezaType{
    private _adyacentes: A;
    private _rotacion: R;

    constructor({rotacion,adyacentes}: {rotacion: R,adyacentes?: A}) {
        this._adyacentes = adyacentes || {} as A;
        this._rotacion = rotacion;
    }

    public abstract rotar(): void;

    set rotacion (rotacion: R){
        this._rotacion = rotacion;
    }
    get rotacion (): R{
        return this._rotacion;
    }

    set adyacentes (adyacentes: A) {
        this._adyacentes = adyacentes;
    }
    get adyacentes(): A{
        return this._adyacentes;
    }
}