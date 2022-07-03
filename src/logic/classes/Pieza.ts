import { Color, PiezaType } from '../types';

export abstract class Pieza<A,R> implements PiezaType{
    private _adyacentes: A;
    private _color: Color;
    private _rotacion: R;

    constructor({rotacion,adyacentes,color}: {rotacion: R,adyacentes?: A, color: Color}) {
        this._adyacentes = adyacentes || {} as A;
        this._color = color;
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

    set color (color: Color) {
        this._color = color;
    }
    get color(): Color{
        return this._color;
    }
    
}