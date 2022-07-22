import { PiezaType } from '../interfaces';
import { Ficha } from './Ficha';
import { Shape } from './Shape';

export abstract class Pieza<A,R,V> extends Shape<A,R,Pieza<A,R,V>> implements PiezaType<V>{
    private _value?: V;
    private _container: Ficha<V,Pieza<A,R,V>>;

    constructor(rotacion: R, adyacentes: Map<A,Pieza<A,R,V>>,container: Ficha<V,Pieza<A,R,V>>,value?: V) {
        super(rotacion,adyacentes);
        this._value = value;
        this._container = container;
    }

    public abstract rotar(): void;

    set value (value: V | undefined) {
        this._value = value;
    }
    get value(): V | undefined {
        return this._value;
    }
    get container(): Ficha<V,Pieza<A,R,V>> {
        return this._container;
    }
    
}