import { PointsManagerType,Comodin,CasillaType } from '../interfaces';

export class HammerComodin implements Comodin {
    private _pointsManager?: PointsManagerType;

    constructor(private _costo: number) { }

    use(casilla: CasillaType): void {
        casilla.vaciar();
        this._pointsManager?.update({type: 'use_comodin', payload: this});
    }
    
    get costo(): number {
        return this._costo;
    }
    
    set pointsManager(pointsManager: PointsManagerType){
        this._pointsManager = pointsManager;
    }
}