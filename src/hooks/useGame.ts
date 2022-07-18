import { useMemo } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';
import { Inventory } from '../logic/classes/Inventory';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { ColorsArray, Hexagons } from '../helpers';
import { RestrictionManager } from '../logic/classes/RestrictionManager';
import { PointsManager } from '../logic/classes/PointsManager';
import { HammerComodin } from '../logic/classes/HammerComodin';
import { DeleteComodin } from '../logic/classes/DeleteComodin';
import { OutOfMovesRestriction } from '../logic/classes/OutOfMovesRestriction';
import { Color, Event } from '../logic/types';
import { SameValueRestriction } from '../logic/classes/SameValueRestriction';
import { GamePointSystem } from '../logic/classes/GamePointSystem';
import { EventManager } from '../logic/classes/EventManager';
import { GameOverFlag } from '../logic/classes/GameOverFlag';

export const useGame = (tableroFormat: {[key: number]: number}) => {

    const tableroFactory = useMemo(() => new TableroHexagonalFactory<Color>(tableroFormat), []);
    const inventory = useMemo(() => new Inventory<FichaHexagonal<Color>>(new FichaHexagonalFactory<Color>(ColorsArray),3),[]);
    const gameOverFlag = useMemo(() => new GameOverFlag,[]);
    const pointsManager = useMemo(() => new PointsManager<Event>(new GamePointSystem(1,18,0.5)), []);

    const eventManager = useMemo(() => {
        const eventManager = new EventManager<Event>()
        eventManager.subscribe(pointsManager, 'insert_ficha');
        eventManager.subscribe(pointsManager, 'make_hexagon');
        eventManager.subscribe(pointsManager, 'use_comodin');
        eventManager.subscribe(gameOverFlag, 'game_over');
        return eventManager;
    }, []);

    const restrictionManager = useMemo(() => {
        const restrictionManager = new RestrictionManager();
        eventManager.subscribe(restrictionManager, 'insert_ficha');
        eventManager.subscribe(restrictionManager, 'use_comodin');
        restrictionManager.setEventManager(eventManager);
        return restrictionManager;
    }, []);

    const tablero = useMemo(() => {
        const tablero = tableroFactory.generate();
        tablero.forEach(casilla => casilla.setEventManager(eventManager));
        Hexagons.forEach(hexagon => {
            const hexagonCasillas = hexagon.map(index => tablero[index-1]);
            restrictionManager.addRestriction(new SameValueRestriction<Color>(hexagonCasillas),0);
        })
        restrictionManager.addRestriction(new OutOfMovesRestriction(inventory,tablero),1);
        return tablero;
    }, []);

    const hammerComodin = useMemo(() => {
        const comodin = new HammerComodin(108);
        comodin.setEventManager(eventManager);
        return comodin;
    },[]);

    const deleteComodin = useMemo(() => {
        const comodin = new DeleteComodin<FichaHexagonal<Color>>(inventory,216);
        comodin.setEventManager(eventManager);
        return comodin;
    },[]);
    
    return {
        tablero,
        inventory,
        pointsManager,
        comodines: {hammerComodin,deleteComodin},
        gameOverFlag
    }
}