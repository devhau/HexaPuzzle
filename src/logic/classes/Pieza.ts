import { PiezaProps } from '../types';

export abstract class Pieza<RotationType, AdyacenciaType> {
    protected adyacentes: AdyacenciaType;
    protected rotacion: RotationType;

    constructor({rotacion,adyacentes}: PiezaProps<AdyacenciaType,RotationType>) {
        this.adyacentes = adyacentes || {} as AdyacenciaType;
        this.rotacion = rotacion;
    }

    public abstract rotar(): void;
    public getRotacion = (): RotationType => this.rotacion;
    public setAdyacentes = (adyacentes: AdyacenciaType) => this.adyacentes = adyacentes;

}