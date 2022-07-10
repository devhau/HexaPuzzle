import { PiezaType } from '../interfaces';
import { Color, ShapeType } from '../types';

export abstract class Pieza<S extends ShapeType> implements PiezaType{
    private _color: Color;
    private _shape: S;

    constructor(color: Color, shape: S) {
        this._shape = shape;
        this._color = color;
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

    set color (color: Color) {
        this._color = color;
    }
    get color(): Color{
        return this._color;
    }
    
}