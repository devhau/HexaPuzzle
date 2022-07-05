import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const getPiezaSelected = (ficha: FichaHexagonal, x: number, y: number) => {
    switch (ficha.numberOfPiezas) {
        case 1:
            return ficha.piezas[0];
        case 2:
            switch(ficha.rotationStage){
                case 1:
                    return (y <= 50) ? ficha.piezas[0] : ficha.piezas[1];
                case 2:
                    return y > x - 50 ? ficha.piezas[1] : ficha.piezas[0];
                case 3:
                    return y < -x + 145 ? ficha.piezas[1] : ficha.piezas[0];
                case 4:
                    return (y <= 50) ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    return y > x - 50 ? ficha.piezas[0] : ficha.piezas[1];
                case 6:
                    return y < -x + 145 ? ficha.piezas[0] : ficha.piezas[1];
            }
        case 3:  
            switch(ficha.rotationStage){
                case 1:
                    if(x <= 50) return y > -3.92 * x + 186 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < 3.8 * x - 189.4 ? ficha.piezas[2] : ficha.piezas[1];
                case 2:
                    if(y <= 95) return ficha.piezas[0];
                    return y < -4 * x + 347 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y >= 148) return ficha.piezas[2];
                    return y < 3.75 * x - 93.5 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(x <= 50) return y > 4 * x - 96 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -3.78 * x + 285 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y >= 147) return ficha.piezas[0];
                    return y < -3.77 * x + 232.74 ? ficha.piezas[2] : ficha.piezas[1];
                case 6:
                    if(y <= 95) return ficha.piezas[2];
                    return y < 4 * x ? ficha.piezas[1] : ficha.piezas[0];
            }
        case 4:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 48.5)return y < -1.5 * x + 95.5 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < 1.52 * x - 1.64 + 0.4 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y < 48) return ficha.piezas[0];
                    if(x > 67) return y < 1.52 * x - 53.895 ? ficha.piezas[1] : ficha.piezas[2];
                    return y < -1.47 * x + 145.57 ? ficha.piezas[3] : ficha.piezas[2];
                case 3:
                    if(y < 48) return ficha.piezas[3];
                    if(x > 84) return y < 1.5 * x - 77 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < -1.52 * x + 173.7 ? ficha.piezas[2] : ficha.piezas[1];
                case 4:
                    if(y <= 48.5)return y < 1.47 * x - 49 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.5 * x + 147 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y > 73.5) return ficha.piezas[0];
                    if(x < 84) return y < 1.43 * x - 46.8 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.55 * x + 204 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y > 73.5) return ficha.piezas[3];
                    if(x < 67) return y < 1.53 * x - 26.5 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.52 * x + 174.7 ? ficha.piezas[1] : ficha.piezas[2];
            }
        case 5:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 49.5) return y < -2 * x + 152 ? ficha.piezas[0] : ficha.piezas[1];
                    if(x < 50) return y < -2 * x + 146 ? ficha.piezas[4] : ficha.piezas[3];
                    return y < 2 * x - 49 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y <= 73.5) return x < 62.5 ? ficha.piezas[4] : ficha.piezas[0];
                    if(x < 62.5) return y < -2 * x + 197 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < 1.93 * x - 45 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y <= 73.5) return y < 2 * x - 52 ? ficha.piezas[4] : ficha.piezas[3];
                    if(x <= 62.5) return y < -2 * x + 196 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < 1.875 * x - 41.71 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(y >= 49.5) return y < -1.92 * x + 142.8 ? ficha.piezas[1] : ficha.piezas[0];
                    if(x < 50) return y < 2 * x - 49 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.93 * x + 143.5 ? ficha.piezas[3] : ficha.piezas[4];
                case 5:
                    if(y >= 73.5) return x < 62.5 ? ficha.piezas[0] : ficha.piezas[4];
                    if(x < 62.5) return y < 2 * x - 51 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.86 * x + 187 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y >= 73.5) return y < 2 * x - 51 ? ficha.piezas[3] : ficha.piezas[4];
                    if(x <= 63) return y < 1.93 * x - 47.2 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.94 * x + 193 ? ficha.piezas[1] : ficha.piezas[2];
            }
    }
}