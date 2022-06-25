import { AdyacenciaTriangular, Color, PositionHexagonal, RotationTriangular } from '../types';
import { FichaFactory } from './FichaFactory';
import { FichaHexagonal } from './FichaHexagonal';
import { PiezaTriangular } from './PiezaTriangular';

export class FichaHexagonalFactory extends FichaFactory<
    FichaHexagonal,
    PiezaTriangular,
    RotationTriangular,
    PositionHexagonal,
    AdyacenciaTriangular<PiezaTriangular>
>{

    constructor() {
        super(6);
    }

    public generate(): FichaHexagonal {
        let color: Color;
        switch(Math.floor(Math.random() * 5) + 1){
            case 1:
                color = 'rojo';
            break;
            case 2:
                color = 'azul';
            break;
            case 3:
                color = 'cyan';
            break;
            case 4:
                color = 'naranja';
            break;
            case 5:
                color = 'morado';
            break;
        }
        return new FichaHexagonal(color!,Math.floor(Math.random() * 5) + 1);
    }
}