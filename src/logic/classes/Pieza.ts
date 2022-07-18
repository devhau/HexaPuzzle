import { PiezaType } from '../interfaces';
import { Shape } from './Shape';

export abstract class Pieza<A,R,V> extends Shape<A,R,Pieza<A,R,V>> implements PiezaType<V>{
    private _value: V;

    constructor(value: V, rotacion: R, adyacentes: Map<A,Pieza<A,R,V>>) {
        super(rotacion,adyacentes);
        this._value = value;
    }

    public abstract rotar(): void;

    set value (value: V) {
        this._value = value;
    }
    get value(): V{
        return this._value;
    }
    
}