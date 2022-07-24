import { Comodin } from './Comodin';

export interface PointsManagerType{
    points: number;
    canUse(comodin: Comodin<any>): boolean;
}