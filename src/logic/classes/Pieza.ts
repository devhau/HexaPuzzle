import { PiezaProps } from '../types';

export abstract class Pieza<RotationType, PositionType, AdyacenciaType> {
    protected active: boolean;
    protected adyacentes: AdyacenciaType;
    protected position: PositionType;
    protected rotacion: RotationType;

    constructor({active, adyacentes, position, rotacion}: PiezaProps<AdyacenciaType,PositionType,RotationType>) {
        this.active = active;
        this.adyacentes = adyacentes;
        this.position = position;
        this.rotacion = rotacion;
    }

    public isActive = (): boolean => this.active;

}