import { useMemo, useState } from 'react';
import { FichaHexagonal } from '../logic/classes/FichaHexagonal';
import { getFichaPath } from '../helpers/FichaPaths';

export const useFicha = (fichaInfo: FichaHexagonal) => {
    const [ficha, setFicha] = useState(fichaInfo);

    const imagePath = useMemo(() => getFichaPath(fichaInfo),[])

    const rotar = () => {
        fichaInfo.rotar()
        setFicha(fichaInfo);
    }

    return {
        ficha,
        rotar,
        imagePath
    }
}