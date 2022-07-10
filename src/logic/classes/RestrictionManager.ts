import { PointsManagerType,Restriction,Manager } from '../interfaces';
import { Event } from '../types';

export class RestrictionManager implements Manager {

    private _restrictions: Restriction[] = [];
    private _pointsManager?: PointsManagerType;

    public addRestriction(restriction: Restriction){
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
            for (const event of Object.keys(events)) {
                this._pointsManager.update({
                    type: event,
                    payload: events[event] 
                } as Event);
            }
        }
    }

    get restrictions(){
        return this._restrictions;
    }

    set pointsManager(pointsManager: PointsManagerType){
        this._pointsManager = pointsManager;
    }
    
}