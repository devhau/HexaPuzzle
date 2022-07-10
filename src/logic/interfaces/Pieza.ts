import { Color, ShapeType } from '../types';

export interface PiezaType extends ShapeType {
    color: Color;
    rotar?(): void;
}