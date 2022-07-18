import { Restriction, RestrictionManagerType, EventManagerType, Subscriber } from '../interfaces';
import { Event } from '../types';

export class RestrictionManager implements RestrictionManagerType<Event>,Subscriber<Event> {

    private _restrictions: {restriction: Restriction<Event>, order: number}[] = [];
    private _eventManager?: EventManagerType<Event>;

    public addRestriction(restriction: Restriction<Event>, order: number): void {
        if(order < 0 || order > 1) throw new Error('order must be between 0 and 1');
        this._restrictions.push({restriction, order});
    }

    public check(): void {
        for (let i = 0; i <= 1; i++) {
            const restrictions = this._restrictions.filter(restriction => restriction.order === i);
            const restrictionsMatched = restrictions.filter(({restriction})=> restriction.cumple);
            if(restrictionsMatched.length > 0){
                restrictionsMatched.forEach(({restriction}) => {
                    restriction.triggerAction();
                    if(this._eventManager) this._eventManager.notify(restriction.event);
                });
            }
        }
    }

    public update(): void {
        this.check();
    }

    get restrictions(){
        return this._restrictions;
    }

    setEventManager(pointsManager: EventManagerType<Event>){
        this._eventManager = pointsManager;
    }
    
}