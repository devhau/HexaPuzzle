import { PiezaType } from '.';

export type FichaType = {
    blocked: boolean;
    piezas: PiezaType[];
    numberOfPiezas: number;
    rotationStage?: any;
    possibleRotations: number;
    rotar?(): void;
}