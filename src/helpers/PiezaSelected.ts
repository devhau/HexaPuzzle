import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const getPiezaSelected = (ficha: FichaHexagonal, x: number, y: number) => {
    switch (ficha.numberOfPiezas) {
        case 1:
            return ficha.piezas[0];
        case 2:
            switch(ficha.rotationStage){
                case 1:
                    return (y <= 81) ? ficha.piezas[0] : ficha.piezas[1];
                case 2:
                    return y > 1.73 * x - 83 ? ficha.piezas[1] : ficha.piezas[0];
                case 3:
                    return y < -1.73 * x + 237.7 ? ficha.piezas[1] : ficha.piezas[0];
                case 4:
                    return (y <= 81) ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    return y > 1.78 * x - 89 ? ficha.piezas[0] : ficha.piezas[1];
                case 6:
                    return y < -1.725* x + 239.2 ? ficha.piezas[0] : ficha.piezas[1];
            }
        case 3:  
            switch(ficha.rotationStage){
                case 1:
                    if(x < 92) return y > -1.8 * x + 192.8 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < 1.77 * x - 134.3 ? ficha.piezas[2] : ficha.piezas[1];
                case 2:
                    if(y <= 94) return ficha.piezas[0];
                    return y < -1.75 * x + 349.2 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y >= 136.5) return ficha.piezas[2];
                    return y < 1.75 * x - 119.5 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(x < 92) return y > 1.745 * x - 45.32 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.72 * x + 269.97 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y >= 136.5) return ficha.piezas[0];
                    return y < -1.769 * x + 264 ? ficha.piezas[2] : ficha.piezas[1];
                case 6:
                    if(y <= 94) return ficha.piezas[2];
                    return y < 1.78 * x - 37.7 ? ficha.piezas[1] : ficha.piezas[0];
            }
        case 4:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 82.5)return y < -1.7 * x + 155.67 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < 1.8 * x + 0.4 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y < 79.5) return ficha.piezas[0];
                    if(x > 94.5) return y < 1.72 * x - 82 ? ficha.piezas[1] : ficha.piezas[2];
                    return y < -1.8 * x + 246.2 ? ficha.piezas[3] : ficha.piezas[2];
                case 3:
                    if(y < 79.5) return ficha.piezas[3];
                    if(x > 118.5) return y < 1.73 * x - 125.6 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < -1.68 * x + 278.5 ? ficha.piezas[2] : ficha.piezas[1];
                case 4:
                    if(y <= 82.5)return y < 1.8 * x - 83.2 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.8 * x + 247.74 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y > 121.5) return ficha.piezas[0];
                    if(x < 119.5) return y < 1.7 * x - 81.6 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.78 * x + 333.14 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y > 121.5) return ficha.piezas[3];
                    if(x < 94.5) return y < 1.7 * x - 40 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.75 * x + 285.5 ? ficha.piezas[1] : ficha.piezas[2];
            }
        case 5:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 81.5) return y < -1.66 * x + 232 ? ficha.piezas[0] : ficha.piezas[1];
                    if(x < 72) return y < -1.76 * x + 186.65 ? ficha.piezas[4] : ficha.piezas[3];
                    return y < 1.68 * x -57.4 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y < 118.5) return x < 115 ? ficha.piezas[4] : ficha.piezas[0];
                    if(x < 118.5) return y < -1.7 * x + 316 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < 1.72 * x - 80 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y <= 118.5) return y < 1.68 * x - 78 ? ficha.piezas[4] : ficha.piezas[3];
                    if(x <= 117) return y < -1.76 * x + 321.5 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < 1.7 * x - 79 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(y >= 118.5) return y < -1.79 * x + 241 ? ficha.piezas[1] : ficha.piezas[0];
                    if(x < 92.5) return y < 1.6 * x - 69 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.75 * x + 241 ? ficha.piezas[3] : ficha.piezas[4];
                case 5:
                    if(y > 119) return x < 118 ? ficha.piezas[0] : ficha.piezas[4];
                    if(x < 118) return y < 1.9 * x - 98 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.8 * x + 328 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y > 119.5) return y < 1.7 * x - 76 ? ficha.piezas[3] : ficha.piezas[4];
                    if(x <= 116.5) return y < 1.72 * x - 81 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.75 * x + 322 ? ficha.piezas[1] : ficha.piezas[2];
            }
    }
}