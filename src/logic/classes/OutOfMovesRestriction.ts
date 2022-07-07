import { Restriction } from '../interfaces';
import { CasillaType, FichaType, InventoryType } from '../types';

export class OutOfMovesRestriction implements Restriction{
    
    constructor(private _inventory: InventoryType<FichaType>, private _tablero: CasillaType[]){ }

    get cumple(){
        return this.outOfMoves();
    }

    triggerAction(): void {
        return;
    }

    update(): void {
        return;
    }

    private outOfMoves(): boolean {
        let outOfMoves = true;
        for(const ficha of this._inventory.items){
            const fichaCopy = {...ficha, piezas: [...ficha.piezas]};
            if(fichaCopy.possibleRotations && fichaCopy.rotar){
                for (let i = 1; i < fichaCopy.possibleRotations; i++) {
                    fichaCopy.rotar();
                    for(const pieza of fichaCopy.piezas){
                        for (const casilla of this._tablero) {
                            if(casilla.canInsert(pieza)) outOfMoves = false;
                            if(!outOfMoves) break;
                        }
                        if(!outOfMoves) break;
                    }
                    if(!outOfMoves) break;
                }
            }else{
                for(const pieza of ficha.piezas){
                    for (const casilla of this._tablero) {
                        if(casilla.canInsert(pieza)) outOfMoves = false;
                        if(!outOfMoves) break;
                    }
                    if(!outOfMoves) break;
                }
            }
            if(!outOfMoves) break;
        }
        return outOfMoves;
    }

}