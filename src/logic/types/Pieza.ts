import { Color } from './Color';

export type PiezaType = {
    adyacentes: any;
    color: Color;
    rotacion: any;
    rotar(): void;
}