import { Color } from '../types';
import { Pieza } from './Pieza';
import { CasillaType } from '../types/Casilla';

export abstract class Casilla <A,R> implements CasillaType {
    private _adyacentes: A;
    private _color?: Color;
    private readonly _id: number;
    private readonly _rotacion: R;

    constructor({id,rotacion,adyacentes}: {id: number,rotacion: R,adyacentes?: A}) {
        this._adyacentes = adyacentes || {} as A;
        this._id = id;
        this._rotacion = rotacion;
    }

    public abstract puedeInsertar(pieza: Pieza<A,R>): boolean;
    public abstract insertar(pieza: Pieza<A,R>): void;

    public estaVacia = (): boolean => !this._color;

    set adyacentes(adyacentes: A){
        this._adyacentes = adyacentes;
    }
    get adyacentes(){
        return this._adyacentes;
    }

    get color(){
        return this._color;
    }
    set color(color: Color | undefined){
        this._color = color;
    }

    get id(){
        return this._id;
    }

    get rotacion(){
        return this._rotacion;
    }
}