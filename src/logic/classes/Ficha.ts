import { Color, FichaType, PiezaType } from '../types';

export abstract class Ficha<P extends PiezaType> implements FichaType {
    private _piezas: P[] = [];
    
    constructor(private readonly _color: Color) { }
    
    public abstract rotar(): void;

    get color(): Color{
        return this._color;
    }
    
    get piezas(){
        return this._piezas;
    }
    set piezas(piezas: P[]){
        this._piezas = piezas;
    }
}