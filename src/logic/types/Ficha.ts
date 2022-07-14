import { PiezaType } from '../interfaces';

export type FichaType = {
    blocked: boolean;
    piezas: PiezaType[];
    numberOfPiezas?: number;
    rotationStage?: any;
    possibleRotations?: number;
    rotar?(): void;
}