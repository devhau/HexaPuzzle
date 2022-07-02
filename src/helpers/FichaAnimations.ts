import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const getFichaAnimation = (ficha: FichaHexagonal, img: HTMLImageElement | null) => {
    let transform: string = '';
    let animation: string = '';
    let remove: string = '';
    let miliseconds: number = 0;
    if (ficha.numberOfPiezas === 1){
        miliseconds = 500;
        if(ficha.piezas[0].rotacion === 'VERTEXDOWN'){
          remove = 'rotar0to180';
          transform = 'rotar180to360';
          animation = 'rotar180to360-anim';
        }else{
          remove = 'rotar180to360';
          transform = 'rotar0to180';
          animation = 'rotar0to180-anim';
        }
    }else {
        miliseconds = 350;
        if(ficha.rotationStage === 1){
            remove = 'rotar300to360';
            transform = 'rotar0to60';
            animation = 'rotar0to60-anim';
        }else if(ficha.rotationStage === 2){
            remove = 'rotar0to60';
            transform = 'rotar60to120';
            animation = 'rotar60to120-anim';
        }else if(ficha.rotationStage === 3){
            remove = 'rotar60to120';
            transform = 'rotar120to180';
            animation = 'rotar120to180-anim';
        }else if(ficha.rotationStage === 4){
            remove = 'rotar120to180';
            transform = 'rotar180to240';
            animation = 'rotar180to240-anim';
        }else if(ficha.rotationStage === 5){
            remove = 'rotar180to240';
            transform = 'rotar240to300';
            animation = 'rotar240to300-anim';
        }else if(ficha.rotationStage === 6){
            remove = 'rotar240to300';
            transform = 'rotar300to360';
            animation = 'rotar300to360-anim';
        } 
    }
    return {
        transform,
        animation,
        remove,
        miliseconds
    }
}