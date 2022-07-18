import { CasillaType, InventoryType, Restriction } from '../interfaces';
import { Event, FichaType } from '../types';

export class OutOfMovesRestriction implements Restriction<Event>{
    
    constructor(private _inventory: InventoryType<FichaType>, private _tablero: CasillaType[]){ }

    get cumple(){
        return this.outOfMoves();
    }

    private outOfMoves(): boolean {
        this._inventory.items.forEach(ficha => {
            if(!this.encajable(ficha)) ficha.blocked = true;
            else ficha.blocked = false;
        });
        return this._inventory.items.every(ficha => ficha.blocked);
    }

    private encajable(ficha: FichaType): boolean {
        let encaja = false;
        const rotations = ficha.possibleRotations || 1;
        for (let i = 0; i < rotations; i++) {
            for(const pieza of ficha.piezas){
                if(encaja) continue;
                for(const casilla of this._tablero){
                    if(casilla.canInsert(pieza)) encaja = true;
                }
            }
            ficha.rotar?.();
        }
        return encaja;
    }

    triggerAction(): void {
        console.log('game over');
    }

    get event(): Event {
        return {
            type: 'game_over'
        }
    }

}