import { Comodin, PointsManagerType, Subscriber } from '../interfaces';
import { PointSystem } from '../interfaces/PointSystem';

export class PointsManager<E extends {type: string}> implements PointsManagerType, Subscriber<E>{
    private _points: number = 0;

    constructor(
        private _pointSystem: PointSystem<E>
    ){}

    public update(event: E): void {
        this._points += this._pointSystem.getEventPoints(event);
    }

    public canUse(comodin: Comodin<any>): boolean {
        return this._points >= comodin.costo;
    }

    get points(): number {
        return this._points;
    }
    
}