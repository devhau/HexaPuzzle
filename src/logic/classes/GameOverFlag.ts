import { Subscriber } from '../interfaces';
import { Event } from '../types';

export class GameOverFlag implements Subscriber<Event>{

    private _gameOver: boolean = false;

    update(): void {
        this._gameOver = true;
    }
    
    isGameOver(): boolean {
        return this._gameOver;
    }
}