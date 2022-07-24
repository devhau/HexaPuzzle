import { Restriction } from './Restriction';
import { EventManagerType, Subscriber } from '../interfaces';
import { Event } from '../types';

export class RestrictionManager<E extends {type: string}> implements Subscriber<E> {

    private _restrictions: Restriction<Event>[] = [];
    private _eventManager?: EventManagerType<Event>;

    public setNext(restriction: Restriction<Event>): void {
        this._restrictions.push(restriction);
    }

    public check(): void {
        for(let i = 0; i < this._restrictions.length; i++){
            const restrictionsMatched = this._restrictions[i].validate();
            if(restrictionsMatched.length > 0){
                restrictionsMatched.forEach(restriction => {
                    restriction.triggerAction();
                    this._eventManager?.notify(restriction.event);
                })
            }
        }
    }

    public update(): void {
        this.check();
    }

    setEventManager(pointsManager: EventManagerType<Event>){
        this._eventManager = pointsManager;
    }
    
}