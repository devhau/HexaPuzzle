import { PiezaType } from '../interfaces';
import { Shape } from './Shape';

export abstract class Pieza<A,R,V> extends Shape<A,R,Pieza<A,R,V>> implements PiezaType<V>{
    private _value?: V;

    constructor(rotacion: R, adyacentes: Map<A,Pieza<A,R,V>>,value?: V, ) {
        super(rotacion,adyacentes);
        this._value = value;
    }

    public abstract rotar(): void;

    set value (value: V | undefined) {
        this._value = value;
    }
    get value(): V | undefined {
        return this._value;
    }
    
}