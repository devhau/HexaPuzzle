import { useState } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';

export const useFicha = (fichaInfo: FichaHexagonal) => {
    const [ficha, setFicha] = useState(fichaInfo);

    const rotar = () => {
        fichaInfo.rotar()
        setFicha(fichaInfo);
    }

    return {
        ficha,
        rotar
    }
}