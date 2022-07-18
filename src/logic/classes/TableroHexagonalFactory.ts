import { CasillaTriangular } from './CasillaTriangular';
import { RotationTriangular, TableroFormat } from '../types';
import { Factory } from '../interfaces';

export class TableroHexagonalFactory<V> implements Factory<CasillaTriangular<V>[]>{

    constructor(private readonly _format: TableroFormat) { }

    public generate(): CasillaTriangular<V>[] {
        const tablero: CasillaTriangular<V>[] = [];
        let id = 1;
        for (const rowIndex in this._format) {
            for (let i = 1; i <= this._format[rowIndex]; i++) {
                let rotacion: RotationTriangular;
                if (Number(rowIndex) <= Object.keys(this._format).length / 2) {
                    if(Number(rowIndex) % 2 === 0) {
                        (id % 2 === 0) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }else{
                        (id % 2 === 1) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }
                } else {
                    if(Number(rowIndex) % 2 === 0) {
                        (id % 2 === 1) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }else{
                        (id % 2 === 0) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }
                }
                const casilla = new CasillaTriangular<V>(id, rotacion, new Map());
                tablero.push(casilla);
                id++;
            }
        }
        this.addAdyacentes(tablero);
        return tablero;
    }

    private addAdyacentes(tablero: CasillaTriangular<V>[]): void{
        for (const casilla of tablero) {
            const id = casilla.id;
            let rowIndex = 0;
            let cont = 0;
            while(id > cont){
                rowIndex++;
                cont += this._format[rowIndex];
            }
            if(casilla.rotacion === 'VERTEXUP'){
                if(rowIndex < Object.keys(this._format).length){
                    casilla.addAdyacente('bottom',tablero[id + Math.floor((this._format[rowIndex] + this._format[rowIndex + 1])/2) - 1])
                }
            }else if(casilla.rotacion === 'VERTEXDOWN'){
                if(rowIndex > 1){
                    casilla.addAdyacente('top',tablero[id - Math.floor((this._format[rowIndex] + this._format[rowIndex - 1])/2) - 1])
                }
            }
            if(id > cont - this._format[rowIndex] + 1){
                casilla.addAdyacente('left',tablero[id - 2])
            }
            if(id < cont){
                casilla.addAdyacente('right',tablero[id])
            }
        }
    }
}