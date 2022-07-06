import { useState, useEffect, useRef } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { getFichaPath } from '../helpers/FichaPaths';
import { getFichaAnimation } from '../helpers';

export const useFicha = (fichaInfo: FichaHexagonal) => {
    const [ficha, setFicha] = useState(fichaInfo);
    const [imagePath, setImagePath] = useState(getFichaPath(fichaInfo));
    const refImg = useRef<HTMLImageElement>(null);
    const isRotating = useRef(false);

    const rotar = () => {
        fichaInfo.rotar();
        setFicha(fichaInfo);
    }

    useEffect(() => {
        if(refImg.current) refImg.current.className = '';
    }, [fichaInfo])

    useEffect(() => {
        setFicha(fichaInfo);
        setImagePath(getFichaPath(fichaInfo));
    }, [fichaInfo])

    const rotate = () => {
        if(isRotating.current) return;
        isRotating.current = true;
        const {transform,animation,remove,miliseconds} = getFichaAnimation(ficha,refImg.current);
        refImg.current?.classList.remove(remove);
        refImg.current?.classList.add(transform);
        refImg.current?.classList.add(animation);
        setTimeout(() => {
        refImg.current?.classList.remove(animation);
        isRotating.current = false;
        },miliseconds);
        rotar();
    };

    return {
        ficha,
        rotate,
        imagePath,
        refImg
    }
}