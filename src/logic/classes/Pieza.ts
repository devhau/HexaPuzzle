import { PiezaType } from '../interfaces';
import { ShapeType } from '../types';

export abstract class Pieza<S extends ShapeType,V> implements PiezaType{
    private _value: V;
    private _shape: S;

    constructor(value: V, shape: S) {
        this._shape = shape;
        this._value = value;
    }

    public abstract rotar(): void;

    get rotacion(): S['rotacion'] {
        return this._shape.rotacion;
    }
    set rotacion (rotacion: S['rotacion']) {
        this._shape.rotacion = rotacion;
    }

    get adyacentes(): S['adyacentes'] {
        return this._shape.adyacentes;
    }
    set adyacentes(adyacentes: S['adyacentes']){
        this._shape.adyacentes = adyacentes;
    }

    set value (value: V) {
        this._value = value;
    }
    get value(): V{
        return this._value;
    }
    
}