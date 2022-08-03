import { Restriction } from './Restriction';
import { EventManagerType, Subscriber } from '../interfaces';

export class RestrictionManager<E extends {type: string}> implements Subscriber<E> {

    private _restrictions: Restriction<E>[] = [];
    private _eventManager?: EventManagerType<E>;

    public setNext(restriction: Restriction<E>): void {
        this._restrictions.push(restriction);
    }

    public check(): void {
        for(let i = 0; i < this._restrictions.length; i++){
            const restrictionsMatched = this._restrictions[i].getMatchingRestrictions();
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

    setEventManager(pointsManager: EventManagerType<E>){
        this._eventManager = pointsManager;
    }
    
}