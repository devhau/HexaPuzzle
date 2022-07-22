import { PointSystem } from '../interfaces/PointSystem';
import { Event } from '../types';

export class GamePointSystem implements PointSystem<Event>{

    private _hexagonsInRow: number = 0;
    private _isTimerActive: boolean = false;

    constructor(
        private _pointsPerPieza: number,
        private _pointsPerHexagon: number,
        private _bonusRate: number
    ){}

    getEventPoints(event: Event): number {
       switch (event.type) {
            case 'insert_ficha':
                return this._pointsPerPieza * event.payload.numberOfPiezas;
            case 'make_hexagon':
                this._hexagonsInRow++;
                if(!this._isTimerActive){
                    this._isTimerActive = true;
                    setTimeout(() => {
                        this._isTimerActive = false;
                        this._hexagonsInRow = 0;
                    }, 100);
                }
                return (this._hexagonsInRow > 1)
                ? this._pointsPerHexagon * this._hexagonsInRow * this._bonusRate 
                : this._pointsPerHexagon;
            case 'use_comodin':
                return -event.payload.costo;
            default: 
                return 0;
        }
    }
    
}