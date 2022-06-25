import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import FichaAzul1 from '../assets/Fichas-azul/1.png';
import FichaAzul2_1 from '../assets/Fichas-azul/2-1.png';
import FichaAzul2_2 from '../assets/Fichas-azul/2-2.png';
import FichaAzul3_1 from '../assets/Fichas-azul/3-1.png';
import FichaAzul3_2 from '../assets/Fichas-azul/3-2.png';
import FichaAzul4 from '../assets/Fichas-azul/4.png';
import FichaAzul5 from '../assets/Fichas-azul/5.png';
import FichaRoja1 from '../assets/Fichas-rojo/1.png';
import FichaRoja2_1 from '../assets/Fichas-rojo/2-1.png';
import FichaRoja2_2 from '../assets/Fichas-rojo/2-2.png';
import FichaRoja3_1 from '../assets/Fichas-rojo/3-1.png';
import FichaRoja3_2 from '../assets/Fichas-rojo/3-2.png';
import FichaRoja4 from '../assets/Fichas-rojo/4.png';
import FichaRoja5 from '../assets/Fichas-rojo/5.png';
import FichaCyan1 from '../assets/Fichas-cyan/1.png';
import FichaCyan2_1 from '../assets/Fichas-cyan/2-1.png';
import FichaCyan2_2 from '../assets/Fichas-cyan/2-2.png';
import FichaCyan3_1 from '../assets/Fichas-cyan/3-1.png';
import FichaCyan3_2 from '../assets/Fichas-cyan/3-2.png';
import FichaCyan4 from '../assets/Fichas-cyan/4.png';
import FichaCyan5 from '../assets/Fichas-cyan/5.png';
import FichaMorado1 from '../assets/Fichas-morado/1.png';
import FichaMorado2_1 from '../assets/Fichas-morado/2-1.png';
import FichaMorado2_2 from '../assets/Fichas-morado/2-2.png';
import FichaMorado3_1 from '../assets/Fichas-morado/3-1.png';
import FichaMorado3_2 from '../assets/Fichas-morado/3-2.png';
import FichaMorado4 from '../assets/Fichas-morado/4.png';
import FichaMorado5 from '../assets/Fichas-morado/5.png';
import FichaNaranja1 from '../assets/Fichas-naranja/1.png';
import FichaNaranja2_1 from '../assets/Fichas-naranja/2-1.png';
import FichaNaranja2_2 from '../assets/Fichas-naranja/2-2.png';
import FichaNaranja3_1 from '../assets/Fichas-naranja/3-1.png';
import FichaNaranja3_2 from '../assets/Fichas-naranja/3-2.png';
import FichaNaranja4 from '../assets/Fichas-naranja/4.png';
import FichaNaranja5 from '../assets/Fichas-naranja/5.png';

export const getFichaPath = (ficha: FichaHexagonal): string => {
    switch (ficha.getColor()) {
        case 'azul':
            switch (ficha.getNumberOfActivePiezas()) {
                case 1:
                    return FichaAzul1;
                case 2:
                    //return ficha.getRotation() === 1 ? FichaAzul2_1 : FichaAzul2_2;
                    return FichaAzul2_1;
                case 3:
                    //return ficha.getRotation() === 1 ? FichaAzul3_1 : FichaAzul3_2;
                    return FichaAzul3_1;
                case 4:
                    return FichaAzul4;
                case 5:
                    return FichaAzul5;
                default:
                    return '';
            }
        case 'rojo':
            switch (ficha.getNumberOfActivePiezas()) {
                case 1:
                    return FichaRoja1;
                case 2:                         
                    //return ficha.getRotation() === 1 ? FichaRoja2_1 : FichaRoja2_2;
                    return FichaRoja2_1;
                case 3:
                    //return ficha.getRotation() === 1 ? FichaRoja3_1 : FichaRoja3_2;
                    return FichaRoja3_1;
                case 4:
                    return FichaRoja4;
                case 5:
                    return FichaRoja5;
                default:
                    return '';
            }
        case 'cyan':
            switch (ficha.getNumberOfActivePiezas()) {
                case 1:
                    return FichaCyan1;
                case 2:
                    //return ficha.getRotation() === 1 ? FichaCyan2_1 : FichaCyan2_2;
                    return FichaCyan2_1;
                case 3:
                    //return ficha.getRotation() === 1 ? FichaCyan3_1 : FichaCyan3_2;
                    return FichaCyan3_1;
                case 4:
                    return FichaCyan4;
                case 5:
                    return FichaCyan5;
                default:
                    return '';
            }
        case 'morado':
            switch (ficha.getNumberOfActivePiezas()) {
                case 1:
                    return FichaMorado1;
                case 2:
                    //return ficha.getRotation() === 1 ? FichaMorado2_1 : FichaMorado2_2;
                    return FichaMorado2_1;
                case 3:
                    //return ficha.getRotation() === 1 ? FichaMorado3_1 : FichaMorado3_2;
                    return FichaMorado3_1;
                case 4:
                    return FichaMorado4;
                case 5:
                    return FichaMorado5;
                default:
                    return '';
            }
        case 'naranja':
            switch (ficha.getNumberOfActivePiezas()) {
                case 1:
                    return FichaNaranja1;
                case 2:
                    //return ficha.getRotation() === 1 ? FichaNaranja2_1 : FichaNaranja2_2;
                    return FichaNaranja2_1;
                case 3:
                    //return ficha.getRotation() === 1 ? FichaNaranja3_1 : FichaNaranja3_2;
                    return FichaNaranja3_1;
                case 4:
                    return FichaNaranja4;
                case 5:
                    return FichaNaranja5;
                default:
                    return '';
            }
        default:
            return '';
    }
}