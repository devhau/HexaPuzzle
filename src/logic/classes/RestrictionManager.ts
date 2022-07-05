import { Restriction, Manager } from '../interfaces/Restriction';

export class RestrictionManager<R extends Restriction> implements Manager<R> {

    private _restrictions: R[] = [];

    public addRestriction(restriction: R){
        this._restrictions.push(restriction);
    }

    public check(): void {
        const restrictionsMatched = this._restrictions.filter(restriction => restriction.cumple);
        restrictionsMatched.forEach(restriction => restriction.triggerAction());
    }

    get restrictions(){
        return this._restrictions;
    }
    
}