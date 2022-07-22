import { PiezaType } from '../interfaces';
import { FichaType } from '../types';

export abstract class Ficha<V,P extends PiezaType<V>> implements FichaType {
    private _piezas: P[] = [];
    private _blocked: boolean = false;

    constructor(protected _rotationStage: number, piezasValues: V[], protected _hasSpaces: boolean) {
        if(piezasValues.length <= 0) throw new Error('No se puede crear una ficha sin piezas');
        this.setPiezas(piezasValues);
        this.updateAdyacentes();
    }
    
    public abstract rotar(): void;
    protected abstract setPiezas(piezasValues: V[]): void;
    protected abstract updateAdyacentes(): void;

    get blocked(){
        return this._blocked;
    }
    
    set blocked(blocked: boolean){
        this._blocked = blocked;
    }
    
    get piezas(){
        return this._piezas;
    }
    protected set piezas(piezas: P[]){
        this._piezas = piezas;
    }

    get numberOfPiezas(): number{
        return this._piezas.filter(pieza => pieza.value).length;
    }

    get rotationStage() {
        return this._rotationStage;
    }

    get hasSpaces() {
        return this._hasSpaces;
    }
    
}