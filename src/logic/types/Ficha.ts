import { PiezaType } from '../interfaces';
import { Color } from './';

export type FichaType = {
    blocked: boolean;
    color: Color;
    piezas: PiezaType[];
    numberOfPiezas?: number;
    rotationStage?: any;
    possibleRotations?: number;
    rotar?(): void;
}