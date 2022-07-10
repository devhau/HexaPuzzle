export class Shape<A,R>{
    
    constructor(private _rotacion: R, private _adyacentes: A){}

    get rotacion(): R{
        return this._rotacion;
    }
    set rotacion(rotacion: R){
        this._rotacion = rotacion;
    }
    get adyacentes(): A{
        return this._adyacentes;
    }
    set adyacentes(adyacentes: A){
        this._adyacentes = adyacentes;
    }
}