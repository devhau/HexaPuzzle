import { Comodin, PointsManagerType } from '../interfaces';
import { Event } from '../types';

export class PointsManager implements PointsManagerType{
    private _points: number = 0;

    constructor(
        private _pointsPerPieza: number,
        private _pointsPerHexagon: number,
        private _bonusRate: number
    ){}

    public update(event: Event): void {
        switch (event.type) {
            case 'insert_pieza':
                this._points += this._pointsPerPieza * event.payload;
            break;
            case 'make_hexagon':
                const bonus = event.payload > 1 
                ? this._pointsPerHexagon * event.payload * this._bonusRate : 0;
                this._points += this._pointsPerHexagon * event.payload + bonus;
            break;
            case 'use_comodin':
                if(this.canUse(event.payload))
                this._points -= event.payload.costo;
            break;
        }
    }

    public canUse(comodin: Comodin): boolean {
        return this._points >= comodin.costo;
    }

    get points(): number {
        return this._points;
    }
}