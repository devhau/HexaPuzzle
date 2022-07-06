import { Color,PiezaType } from './';

export type FichaType = {
    color: Color;
    piezas: PiezaType[];
    rotar(): void;
    numberOfPiezas?: number;
    rotationStage?: any;
}