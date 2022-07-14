import { useMemo } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';
import { Inventory } from '../logic/classes/Inventory';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { CasillaTriangular } from '../logic/classes/CasillaTriangular';
import { ColorsArray, Hexagons } from '../helpers';
import { RestrictionManager } from '../logic/classes/RestrictionManager';
import { PointsManager } from '../logic/classes/PointsManager';
import { HammerComodin } from '../logic/classes/HammerComodin';
import { DeleteComodin } from '../logic/classes/DeleteComodin';
import { OutOfMovesRestriction } from '../logic/classes/OutOfMovesRestriction';
import { Color } from '../logic/types';
import { SameValueRestriction } from '../logic/classes/SameValueRestriction';

export const useGame = (tableroFormat: {[key: number]: number}) => {
    const inventory = useMemo(() => new Inventory<FichaHexagonal<Color>>(new FichaHexagonalFactory<Color>(ColorsArray),3),[]);
    const tableroFactory = useMemo(() => new TableroHexagonalFactory<Color>(tableroFormat), []);
    const pointsManager = useMemo(() => new PointsManager(1,18,0.5), []);
    const tablero = useMemo(() =>{
        const tablero = tableroFactory.generate();
        setGameActors(tablero, pointsManager);
        return tablero;
    }, []);
    const outOfMovesRestriction = useMemo(() => new OutOfMovesRestriction(inventory,tablero), []);
    return {
        tablero,
        inventory,
        pointsManager,
        comodines: getComodines(inventory),
        outOfMovesRestriction
    }
}

const setGameActors = (tablero: CasillaTriangular<Color>[], pointsManager: PointsManager) => {
    tablero.forEach(casilla => casilla.pointsManager = pointsManager);
    const restrictionManager = new RestrictionManager();
    restrictionManager.pointsManager = pointsManager;
    Hexagons.forEach(hexagon => {
        const hexagonCasillas = hexagon.map(index => tablero[index-1]);
        const restriction = new SameValueRestriction(hexagonCasillas,restrictionManager);
        restrictionManager.addRestriction(restriction);
        hexagonCasillas.forEach(casilla => casilla.addRestriction(restriction));
    })
}

const getComodines = (inventory: Inventory<FichaHexagonal<Color>>) => {
    const hammerComodin = useMemo(() => new HammerComodin(108),[]);
    const deleteComodin = useMemo(() => new DeleteComodin<FichaHexagonal<Color>>(inventory,216),[]);
    return {
        hammerComodin,
        deleteComodin
    }
}