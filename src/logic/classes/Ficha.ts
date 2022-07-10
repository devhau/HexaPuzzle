import { PiezaType } from '../interfaces';
import { Color, FichaType } from '../types';

export abstract class Ficha<P extends PiezaType> implements FichaType {
    private _piezas: P[] = [];
    private _blocked: boolean = false;
    
    constructor(private readonly _color: Color) { }
    
    public abstract rotar(): void;

    get blocked(){
        return this._blocked;
    }
    
    set blocked(blocked: boolean){
        this._blocked = blocked;
    }

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