import { useState, useEffect, useRef } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { getFichaPath } from '../helpers/FichaPaths';
import { getFichaAnimation } from '../helpers';
import { Color } from '../logic/types';

export const useFicha = (ficha: FichaHexagonal<Color>) => {
    const [imagePath, setImagePath] = useState(getFichaPath(ficha));
    const refImg = useRef<HTMLImageElement>(null);
    const isRotating = useRef(false);

    useEffect(() => {
        refImg.current!.style.display = 'none';
        if(refImg.current){
            switch(ficha.rotationStage){
                case 1:
                    refImg.current.className = '';
                break;
                case 2:
                    refImg.current.className = ficha.possibleRotations === 2 ? 'rotar0to180' : 'rotar0to60';
                break;
                case 3:
                    refImg.current.className = 'rotar60to120';
                break;
                case 4:
                    refImg.current.className = 'rotar120to180';
                break;
                case 5:
                    refImg.current.className = 'rotar180to240';
                break;
                case 6:
                    refImg.current.className = 'rotar240to300';
                break;
            }
        }
        setImagePath(getFichaPath(ficha));
        refImg.current!.style.display = 'block';
    }, [ficha]);

    const rotate = () => {
        if(isRotating.current) return;
        isRotating.current = true;
        const {transform,animation,remove,miliseconds} = getFichaAnimation(ficha);
        refImg.current?.classList.remove(remove);
        refImg.current?.classList.add(transform);
        refImg.current?.classList.add(animation);
        setTimeout(() => {
            refImg.current?.classList.remove(animation);
            isRotating.current = false;
        },miliseconds);
        ficha.rotar();
    };

    return {
        rotate,
        imagePath,
        refImg,
        setImagePath
    }
}