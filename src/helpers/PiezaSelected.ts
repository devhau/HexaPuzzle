import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const getPiezaSelected = (ficha: FichaHexagonal, x: number, y: number) => {
    switch (ficha.numberOfPiezas) {
        case 1:
            return ficha.piezas[0];
        case 2:
            switch(ficha.rotationStage){
                case 1:
                    return (y <= 70) ? ficha.piezas[0] : ficha.piezas[1];
                case 2:
                    return y > 1.5776 * x - 60 ? ficha.piezas[1] : ficha.piezas[0];
                case 3:
                    return y < -1.7109 * x + 196.5 ? ficha.piezas[1] : ficha.piezas[0];
                case 4:
                    return (y <= 70) ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    return y > 1.5776 * x - 60 ? ficha.piezas[0] : ficha.piezas[1];
                case 6:
                    return y < -1.7109 * x + 196.5 ? ficha.piezas[0] : ficha.piezas[1];
            }
        case 3:  
            switch(ficha.rotationStage){
                case 1:
                    if(x < 76) return y > -1.8 * x + 151.62 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < 1.7062 * x - 96.474 ? ficha.piezas[2] : ficha.piezas[1];
                case 2:
                    if(y <= 75) return ficha.piezas[0];
                    return y < -1.7496 * x + 284.12 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y >= 108) return ficha.piezas[2];
                    return y < 1.7611 * x - 97.31 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(x < 76) return y > 1.7 * x - 31 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.72 * x + 213.16 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y >= 108) return ficha.piezas[0];
                    return y < -1.714 * x + 207.14 ? ficha.piezas[2] : ficha.piezas[1];
                case 6:
                    if(y < 75) return ficha.piezas[2];
                    return y < 1.76 * x - 27 ? ficha.piezas[1] : ficha.piezas[0];
            }
        case 4:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 62.5)return y < -1.7 * x + 119.5 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < 1.7 * x + 4.6 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y < 60.5) return ficha.piezas[0];
                    if(x > 72.5) return y < 1.7 * x - 61 ? ficha.piezas[1] : ficha.piezas[2];
                    return y < -1.8 * x + 188.81 ? ficha.piezas[3] : ficha.piezas[2];
                case 3:
                    if(y <= 61.5) return ficha.piezas[3];
                    if(x > 72.5) return y < 1.7895 * x - 103 ? ficha.piezas[0] : ficha.piezas[1];
                    return y < -1.727 * x + 217.64 ? ficha.piezas[2] : ficha.piezas[1];
                case 4:
                    if(y <= 62.5)return y < 1.73 * x - 60 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.71 * x + 185.71 ? ficha.piezas[1] : ficha.piezas[0];
                case 5:
                    if(y > 95) return ficha.piezas[0];
                    if(x < 90) return y < 1.7895 * x - 68.15 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.7692 * x + 254.62 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y > 94.5) return ficha.piezas[3];
                    if(x < 72.5) return y < 1.7368 * x - 31.421 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.68 * x + 213.91 ? ficha.piezas[1] : ficha.piezas[2];
            }
        case 5:
            switch(ficha.rotationStage){
                case 1:
                    if(y <= 62.5) return y < -1.739 * x + 186.39 ? ficha.piezas[0] : ficha.piezas[1];
                    if(x < 72) return y < -1.76 * x + 186.65 ? ficha.piezas[4] : ficha.piezas[3];
                    return y < 1.68 * x -57.4 ? ficha.piezas[2] : ficha.piezas[3];
                case 2:
                    if(y < 92) return x < 90.5 ? ficha.piezas[0] : ficha.piezas[4];
                    if(x < 90.5) return y < -1.64 * x + 243.71 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < 1.76 * x - 66.5 ? ficha.piezas[1] : ficha.piezas[2];
                case 3:
                    if(y <= 92.5) return y < 1.739 * x - 64.1 ? ficha.piezas[4] : ficha.piezas[3];
                    if(x < 90.5) return y < -1.75 * x + 249 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < 1.68 * x - 57.4 ? ficha.piezas[0] : ficha.piezas[1];
                case 4:
                    if(y >= 61.5) return y < -1.739 * x + 186.39 ? ficha.piezas[1] : ficha.piezas[0];
                    if(x < 71.5) return y < 1.76 * x - 61 ? ficha.piezas[3] : ficha.piezas[2];
                    return y < -1.78 * x + 191 ? ficha.piezas[3] : ficha.piezas[4];
                case 5:
                    if(y > 92.5) return x < 90.5 ? ficha.piezas[0] : ficha.piezas[4];
                    if(x < 90.5) return y < 1.71 * x - 62 ? ficha.piezas[2] : ficha.piezas[1];
                    return y < -1.76 * x + 250 ? ficha.piezas[2] : ficha.piezas[3];
                case 6:
                    if(y > 92.5) return y < 1.75 * x - 65.75 ? ficha.piezas[3] : ficha.piezas[4];
                    if(x <= 91) return y < 1.75 * x - 66 ? ficha.piezas[1] : ficha.piezas[0];
                    return y < -1.75 * x + 250 ? ficha.piezas[1] : ficha.piezas[2];
            }
    }
}