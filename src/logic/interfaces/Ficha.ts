import { PiezaType } from '.';

export interface FichaType<V = any> {
    blocked: boolean;
    piezas: PiezaType<V>[];
    hasSpaces: boolean;
    numberOfPiezas: number;
    rotationStage?: any;
    possibleRotations: number;
    rotar?(): void;
}