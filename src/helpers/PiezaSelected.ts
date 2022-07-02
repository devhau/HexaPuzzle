import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const getPiezaSelected = (ficha: FichaHexagonal, x: number, y: number) => {
    switch (ficha.getNumberOfPiezas()) {
        case 1:
            return ficha.getPiezas()[0];
        case 2:
            switch(ficha.getRotationStage()){
                case 1:
                    return (y <= 70) ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                case 2:
                    return y > 1.5776 * x - 60 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                case 3:
                    return y < -1.7109 * x + 196.5 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                case 4:
                    return (y <= 70) ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                case 5:
                    return y > 1.5776 * x - 60 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                case 6:
                    return y < -1.7109 * x + 196.5 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
            }
        case 3:  
            switch(ficha.getRotationStage()){
                case 1:
                    if(x < 76) return y > -1.8 * x + 151.62 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                    return y < 1.7062 * x - 96.474 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                case 2:
                    if(y <= 75) return ficha.getPiezas()[0];
                    return y < -1.7496 * x + 284.12 ? ficha.getPiezas()[1] : ficha.getPiezas()[2];
                case 3:
                    if(y >= 108) return ficha.getPiezas()[2];
                    return y < 1.7611 * x - 97.31 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                case 4:
                    if(x < 76) return y > 1.7 * x - 31 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                    return y < -1.72 * x + 213.16 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                case 5:
                    if(y >= 108) return ficha.getPiezas()[0];
                    return y < -1.714 * x + 207.14 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                case 6:
                    if(y < 75) return ficha.getPiezas()[2];
                    return y < 1.76 * x - 27 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
            }
        case 4:
            switch(ficha.getRotationStage()){
                case 1:
                    if(y <= 62.5)return y < -1.7 * x + 119.5 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                    return y < 1.7 * x + 4.6 ? ficha.getPiezas()[2] : ficha.getPiezas()[3];
                case 2:
                    if(y < 60.5) return ficha.getPiezas()[0];
                    if(x > 72.5) return y < 1.7 * x - 61 ? ficha.getPiezas()[1] : ficha.getPiezas()[2];
                    return y < -1.8 * x + 188.81 ? ficha.getPiezas()[3] : ficha.getPiezas()[2];
                case 3:
                    if(y <= 61.5) return ficha.getPiezas()[3];
                    if(x > 72.5) return y < 1.7895 * x - 103 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                    return y < -1.727 * x + 217.64 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                case 4:
                    if(y <= 62.5)return y < 1.73 * x - 60 ? ficha.getPiezas()[3] : ficha.getPiezas()[2];
                    return y < -1.71 * x + 185.71 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                case 5:
                    if(y > 95) return ficha.getPiezas()[0];
                    if(x < 90) return y < 1.7895 * x - 68.15 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                    return y < -1.7692 * x + 254.62 ? ficha.getPiezas()[2] : ficha.getPiezas()[3];
                case 6:
                    if(y > 94.5) return ficha.getPiezas()[3];
                    if(x < 72.5) return y < 1.7368 * x - 31.421 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                    return y < -1.68 * x + 213.91 ? ficha.getPiezas()[1] : ficha.getPiezas()[2];
            }
        case 5:
            switch(ficha.getRotationStage()){
                case 1:
                    if(y <= 62.5) return y < -1.739 * x + 186.39 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                    if(x < 72) return y < -1.76 * x + 186.65 ? ficha.getPiezas()[4] : ficha.getPiezas()[3];
                    return y < 1.68 * x -57.4 ? ficha.getPiezas()[2] : ficha.getPiezas()[3];
                case 2:
                    if(y < 92) return x < 90.5 ? ficha.getPiezas()[0] : ficha.getPiezas()[4];
                    if(x < 90.5) return y < -1.64 * x + 243.71 ? ficha.getPiezas()[3] : ficha.getPiezas()[2];
                    return y < 1.76 * x - 66.5 ? ficha.getPiezas()[1] : ficha.getPiezas()[2];
                case 3:
                    if(y <= 92.5) return y < 1.739 * x - 64.1 ? ficha.getPiezas()[4] : ficha.getPiezas()[3];
                    if(x < 90.5) return y < -1.75 * x + 249 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                    return y < 1.68 * x - 57.4 ? ficha.getPiezas()[0] : ficha.getPiezas()[1];
                case 4:
                    if(y >= 61.5) return y < -1.739 * x + 186.39 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                    if(x < 71.5) return y < 1.76 * x - 61 ? ficha.getPiezas()[3] : ficha.getPiezas()[2];
                    return y < -1.78 * x + 191 ? ficha.getPiezas()[3] : ficha.getPiezas()[4];
                case 5:
                    if(y > 92.5) return x < 90.5 ? ficha.getPiezas()[0] : ficha.getPiezas()[4];
                    if(x < 90.5) return y < 1.71 * x - 62 ? ficha.getPiezas()[2] : ficha.getPiezas()[1];
                    return y < -1.76 * x + 250 ? ficha.getPiezas()[2] : ficha.getPiezas()[3];
                case 6:
                    if(y > 92.5) return y < 1.75 * x - 65.75 ? ficha.getPiezas()[3] : ficha.getPiezas()[4];
                    if(x <= 91) return y < 1.75 * x - 66 ? ficha.getPiezas()[1] : ficha.getPiezas()[0];
                    return y < -1.75 * x + 250 ? ficha.getPiezas()[1] : ficha.getPiezas()[2];
            }
    }
}