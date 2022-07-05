import { Restriction, Manager } from '../interfaces/Restriction';
import { Event } from '../types';
import { PointsManager } from './PointsManager';

export class RestrictionManager<R extends Restriction> implements Manager<R> {

    private _restrictions: R[] = [];
    private _pointsManager?: PointsManager;

    public addRestriction(restriction: R){
        this._restrictions.push(restriction);
    }

    public check(): void {
        const restrictionsMatched = this._restrictions.filter(restriction => restriction.cumple);
        restrictionsMatched.forEach(restriction => restriction.triggerAction());
        if(restrictionsMatched.length > 0 && this._pointsManager){
            const events: {[type: string]: number} = {};
            restrictionsMatched.forEach(restriction => {
                if(!restriction.eventType) return;
                events[restriction.eventType] = (events[restriction.eventType] || 0) + 1;
            });
            for (const event in events) {
                this._pointsManager.update({
                    type: event as Event['type'],
                    payload: events[event]
                })
            }
        }
    }

    get restrictions(){
        return this._restrictions;
    }

    set pointsManager(pointsManager: PointsManager){
        this._pointsManager = pointsManager;
    }
    
}