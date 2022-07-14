import { ShapeType } from '../types';

export interface PiezaType extends ShapeType {
    value: any;
    rotar?(): void;
}