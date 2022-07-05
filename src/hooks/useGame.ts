import { useMemo } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';
import { Inventory } from '../logic/classes/Inventory';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { SameColorRestriction } from '../logic/classes/SameColorRestriction';
import { Hexagons } from '../helpers';
import { RestrictionManager } from '../logic/classes/RestrictionManager';
import { CasillaRestriction } from '../logic/classes/CasillaRestriction';

export const useGame = (tableroFormat: {[key: number]: number}) => {
    const inventory = useMemo(() => new Inventory<FichaHexagonal>(new FichaHexagonalFactory(),3),[]);
    const tableroFactory = useMemo(() => new TableroHexagonalFactory(tableroFormat), []);
    const tablero = useMemo(() =>{
        const tablero = tableroFactory.generate();
        setRestrictions(tablero);
        return tablero;
    }, []);
    return {
        tablero,
        inventory
    }
}

const setRestrictions = (tablero: CasillaTriangular[]) => {
    const restrictionManager = new RestrictionManager<CasillaRestriction>();
    Hexagons.forEach(hexagon => {
        const hexagonCasillas = hexagon.map(index => tablero[index-1]);
        const restriction = new SameColorRestriction(hexagonCasillas,restrictionManager);
        restrictionManager.addRestriction(restriction);
        hexagonCasillas.forEach(casilla => casilla.addRestriction(restriction));
    })
}