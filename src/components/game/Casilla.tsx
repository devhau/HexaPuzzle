import { FC, useContext, useState, useEffect } from 'react';
import { GameContext, ThemeContext } from '../../context';
import { DragAndDropContext } from '../../context/DragAndDropContext';
import { Colors } from '../../helpers';
import { CasillaTriangular } from '../../logic/classes/CasillaTriangular';

interface Props {
  casilla: CasillaTriangular;
}

export const Casilla: FC<Props> = ({casilla}) => {
  const {mode} = useContext(ThemeContext);
  const {piezaSelected,fichaDragging} = useContext(DragAndDropContext);
  const {insertFicha} = useContext(GameContext);
  const [color, setColor] = useState('grey');

  useEffect(() => {
    if(!casilla?.estaVacia()) setColor(Colors[casilla?.color!]);
    else setColor(Colors[mode === 'dark' ? 'darkGrey' : 'lightGrey'])
  }, [casilla?.color]);
  useEffect(() => {
    if(casilla?.estaVacia())
    setColor(Colors[mode === 'dark' ? 'darkGrey' : 'lightGrey']);
  }, [mode]);
  
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if(!casilla.estaVacia()) return;
    if(piezaSelected && fichaDragging) insertFicha(fichaDragging,piezaSelected,casilla);
  }
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div
      onDrop={onDrop} 
      onDragOver={allowDrop}
      style={{
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        transform: casilla?.rotacion === 'VERTEXDOWN' ? 'rotate(180deg)' : 'rotate(0deg)',
        width: '85.5px',
        height: '75px',
        backgroundColor: color,
        margin: '0 -20px',
        transition: 'background-color ease .25s'
      }}
    ></div>
  )
  
}