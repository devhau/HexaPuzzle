import { Comodin } from './Comodin';
import { Subscriber } from './Subscription';

export interface PointsManagerType extends Subscriber{
    points: number;
    canUse(comodin: Comodin): boolean;
}