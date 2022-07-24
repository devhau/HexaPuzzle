import { EventManagerType, Factory, GameFactory, Subscriber } from '../interfaces';
import { Event } from '../types';
import { FichaHexagonal } from './FichaHexagonal';
import { CasillaTriangular } from './CasillaTriangular';

export class HexaGameFactory<V> implements GameFactory<FichaHexagonal<V>, CasillaTriangular<V>>,Subscriber<Event<FichaHexagonal<V>>> {
    private _eventManager?: EventManagerType<Event<FichaHexagonal<V>>>;

    constructor(
        private readonly _fichaFactory: Factory<FichaHexagonal<V>>,
        private readonly _tableroFactory: Factory<CasillaTriangular<V>[]>
    ) { }

    public generateFicha(): FichaHexagonal<V> {
        return this._fichaFactory.generate();
    }

    public generateTablero(): CasillaTriangular<V>[] {
        return this._tableroFactory.generate();
    }

    public update(): void {
        this._eventManager?.notify({ type: 'generate_ficha', payload: this.generateFicha() });
    }

    public setEventManager(eventManager: EventManagerType<Event<FichaHexagonal<V>>>): void {
        this._eventManager = eventManager;
    }

    get fichaFactory(): Factory<FichaHexagonal<V>> {
        return this._fichaFactory;
    }
    get tableroFactory(): Factory<CasillaTriangular<V>[]> {
        return this._tableroFactory;
    }

}