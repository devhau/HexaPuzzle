import { CasillaProps, Color } from '../types';

export abstract class Casilla <AdyacenciaType,RotationType>{
    protected adyacentes: AdyacenciaType = {} as AdyacenciaType;
    protected color?: Color;
    protected id: number;
    protected rotacion: RotationType;

    constructor({id, rotacion}: CasillaProps<AdyacenciaType,RotationType>) {
        this.id = id;
        this.rotacion = rotacion;
    }

    public setAdyacentes = (adyacentes: AdyacenciaType) => this.adyacentes = adyacentes;
    public getAdyacentes = (): AdyacenciaType | undefined => this.adyacentes || undefined;
    public getColor = (): Color | undefined => this.color || undefined;
    public getId = (): number => this.id;
    public getRotacion = (): RotationType => this.rotacion;
}