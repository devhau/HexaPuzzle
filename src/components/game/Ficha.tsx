import { FC, useContext, useEffect, useRef } from 'react';
import { DragAndDropContext } from '../../context';
import { useFicha } from '../../hooks';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';
import { getFichaAnimation } from '../../helpers/FichaAnimations';
import { getPiezaSelected } from '../../helpers/PiezaSelected';

interface Props {
  fichaInfo: FichaHexagonal;
}

export const Ficha: FC<Props> = ({fichaInfo}) => {
  const {startDragging,stopDragging} = useContext(DragAndDropContext);
  const {ficha, rotate, imagePath, refImg} = useFicha(fichaInfo);
  
  const onDragStart = (e: any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; 
    let y = e.clientY - rect.top; 
    startDragging(fichaInfo,getPiezaSelected(ficha,x,y));
  }

  const onDragEnd = (e: React.DragEvent<HTMLImageElement>) => stopDragging();

  return (
    <img
      ref={refImg}
      alt="Ficha"
      src={`../../${imagePath}`}
      draggable
      onClick={rotate}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      style={{
        width: ficha.numberOfPiezas === 1 ? '37.5%' : 
        ficha.numberOfPiezas === 2 ? '37.5%' : 
        ficha.numberOfPiezas === 3 ? '80%' :
        ficha.numberOfPiezas === 4 ? '60%' : '80%',
        objectFit: 'contain',
        cursor: 'pointer'
      }}
    />
  )
}