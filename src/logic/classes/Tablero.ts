import { Casilla } from './Casilla';

export abstract class Tablero<
    CasillaType extends Casilla<AdyacenciaType,RotationType>, 
    AdyacenciaType,RotationType>
{
    protected casillas: CasillaType[] = [];
}