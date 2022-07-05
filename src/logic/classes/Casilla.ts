import { Color,CasillaType } from '../types';
import { Subscription } from '../interfaces';
import { Pieza } from './Pieza';
import { CasillaRestriction } from './CasillaRestriction';
import { PointsManager } from './PointsManager';

export abstract class Casilla <A,R> implements CasillaType, Subscription {
    private _adyacentes: A;
    private _color?: Color;
    private _restrictions: CasillaRestriction[] = [];
    private _pointsManager?: PointsManager;
    private readonly _id: number;
    private readonly _rotacion: R;

    constructor({id,rotacion,adyacentes}: {id: number,rotacion: R,adyacentes?: A}) {
        this._adyacentes = adyacentes || {} as A;
        this._id = id;
        this._rotacion = rotacion;
    }
    
    public abstract canInsert(pieza: Pieza<A,R>): boolean;
    public abstract insertPieza(pieza: Pieza<A,R>): void;
    
    public estaVacia = (): boolean => !this._color;
    public vaciar = (): void => this._color = undefined;

    public notify(): void {
        this._restrictions.forEach(restriction => restriction.update());
        this._pointsManager?.update({type: 'insert_pieza', payload: 1});
    }

    public addRestriction(restriction: CasillaRestriction){
        this._restrictions.push(restriction);
    }

    set pointsManager(pointsManager: PointsManager){
        this._pointsManager = pointsManager;
    }

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

    get restrictions(){
        return this._restrictions;
    }
}