import { CasillaProps, Color } from '../types';

export abstract class Casilla <AdyacenciaType,RotationType>{
    protected adyacentes: AdyacenciaType;
    protected color?: Color;
    protected id: number;
    protected rotacion: RotationType;

    constructor({adyacentes, id, rotacion}: CasillaProps<AdyacenciaType,RotationType>) {
        this.adyacentes = adyacentes;
        this.id = id;
        this.rotacion = rotacion;
    }
}