import { PiezaProps } from '../types';

export abstract class Pieza<RotationType, PositionType, AdyacenciaType> {
    protected active: boolean;
    protected adyacentes: AdyacenciaType = {} as AdyacenciaType;
    protected position: PositionType;
    protected rotacion: RotationType;

    constructor({active, position, rotacion}: PiezaProps<AdyacenciaType,PositionType,RotationType>) {
        this.active = active;
        this.position = position;
        this.rotacion = rotacion;
    }

    public isActive = (): boolean => this.active;
    public getRotacion = (): RotationType => this.rotacion;
    public setAdyacentes = (adyacentes: AdyacenciaType) => this.adyacentes = adyacentes;

}