export class Shape<A,R,T extends Shape<A,R,T>>{
    
    constructor(private _rotacion: R, private _adyacentes: Map<A,T>){}

    get rotacion(): R{
        return this._rotacion;
    }
    set rotacion(rotacion: R){
        this._rotacion = rotacion;
    }
    get adyacentes(): Map<A,T>{
        return this._adyacentes;
    }
    addAdyacente(adyacencia: A, adyacente: T){
        this._adyacentes.set(adyacencia,adyacente);
    }
    
}