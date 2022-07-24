import { useMemo } from 'react';
import { FichaHexagonalFactory } from '../logic/classes/FichaHexagonalFactory';
import { TableroHexagonalFactory } from '../logic/classes/TableroHexagonalFactory';
import { ColorsArray, Hexagons } from '../helpers';
import { RestrictionManager } from '../logic/classes/RestrictionManager';
import { PointsManager } from '../logic/classes/PointsManager';
import { HammerComodin } from '../logic/classes/HammerComodin';
import { Color, Event } from '../logic/types';
import { GamePointSystem } from '../logic/classes/GamePointSystem';
import { EventManager } from '../logic/classes/EventManager';
import { GameOverFlag } from '../logic/classes/GameOverFlag';
import { HexaGameFactory } from '../logic/classes/HexaGameFactory';
import { Restriction } from '../logic/classes/Restriction';
import { SameValueCondition } from '../logic/classes/SameValueCondition';
import { OutOfMovesCondition } from '../logic/classes/OutOfMovesCondition';
import { TrashComodin } from '../logic/classes/TrashComodin';
import { FichaHexagonalInventory } from '../logic/classes/FichaHexagonalInventory';

export const useGame = (tableroFormat: {[key: number]: number}) => {

    const eventManager = useMemo(() => new EventManager<Event>(), []);

    const pointsManager = useMemo(() => {
        const pointsManager = new PointsManager<Event>(new GamePointSystem(1,18,0.5));
        eventManager.subscribe(pointsManager, 'insert_ficha');
        eventManager.subscribe(pointsManager, 'make_hexagon');
        eventManager.subscribe(pointsManager, 'use_comodin');
        return pointsManager;
    }, []);

    const gameOverFlag = useMemo(() => {
        const flag = new GameOverFlag();
        eventManager.subscribe(flag, 'game_over');
        return flag;
    },[]);

    const factory = useMemo(() => { 
        const gameFactory = new HexaGameFactory(
            new FichaHexagonalFactory<Color>(ColorsArray),
            new TableroHexagonalFactory<Color>(tableroFormat)
        )
        eventManager.subscribe(gameFactory, 'insert_ficha');
        eventManager.subscribe(gameFactory, 'remove_ficha');
        gameFactory.setEventManager(eventManager);
        return gameFactory;
    }, []);

    const inventory = useMemo(() =>{
        const fichaInventory = new FichaHexagonalInventory<Color>();
        fichaInventory.populate(factory.fichaFactory,3);
        eventManager.subscribe(fichaInventory, 'generate_ficha');
        eventManager.subscribe(fichaInventory, 'insert_ficha');
        eventManager.subscribe(fichaInventory, 'remove_ficha');
        return fichaInventory;
    },[]);

    const restrictionManager = useMemo(() => {
        const restrictionManager = new RestrictionManager();
        eventManager.subscribe(restrictionManager, 'insert_ficha');
        eventManager.subscribe(restrictionManager, 'use_comodin');
        restrictionManager.setEventManager(eventManager);
        return restrictionManager;
    }, []);

    const tablero = useMemo(() => {
        const tablero = factory.generateTablero();
        tablero.forEach(casilla => casilla.setEventManager(eventManager));
        let setHead: Restriction<Event> | undefined = undefined;
        let prev: Restriction<Event> | undefined = undefined;
        Hexagons.forEach(hexagon => {
            const hexagonCasillas = hexagon.map(index => tablero[index-1]);
            const condition = new SameValueCondition(hexagonCasillas);
            const restriction = new Restriction<Event>(condition, {type: 'make_hexagon'});
            if(!setHead) setHead = restriction;
            if(prev) prev.setNext(restriction);
            prev = restriction;
        })
        if(setHead) restrictionManager.setNext(setHead);
        const restriction = new Restriction<Event>(new OutOfMovesCondition(inventory,tablero), {type: 'game_over'});
        restrictionManager.setNext(restriction);
        return tablero;
    }, []);

    const hammerComodin = useMemo(() => {
        const comodin = new HammerComodin(108);
        comodin.setEventManager(eventManager);
        return comodin;
    },[]);

    const trashComodin = useMemo(() => {
        const comodin = new TrashComodin(216);
        comodin.setEventManager(eventManager);
        return comodin;
    },[]);
    
    return {
        tablero,
        inventory,
        pointsManager,
        comodines: {hammerComodin,trashComodin},
        gameOverFlag
    }
    
}