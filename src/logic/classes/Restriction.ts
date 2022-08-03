import { Condition } from '../interfaces';

export class Restriction<E extends {type: string}> {
    private _next?: Restriction<E>;

    constructor(private _condition: Condition, private _event: E) { }

    public getMatchingRestrictions(): Restriction<E>[] {
        if(this.cumple) return [this, ...(this._next ? this._next.getMatchingRestrictions() : [])];
        else return [...(this._next ? this._next.getMatchingRestrictions() : [])];
    }

    get cumple(): boolean {
        return this._condition.cumple;
    }

    public setNext(restriction: Restriction<E>): void {
        if(!this._next) this._next = restriction;
        else this._next.setNext(restriction);
    }

    public triggerAction(): void {
        this._condition.action();
    }

    get event(): E {
        return this._event;
    }

}