import { FC, useContext, useEffect, useMemo, useState } from 'react';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { DragAndDropContext, GameContext } from '../../context';
import { useFicha } from '../../hooks';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';
import { getPiezaSelected } from '../../helpers/PiezaSelected';
import { Color } from '../../logic/types';

interface Props {
  ficha: FichaHexagonal<Color>;
}

export const Ficha: FC<Props> = ({ficha}) => {
  const {startDragging,stopDragging} = useContext(DragAndDropContext);
  const {isUsingHammer,isUsingDelete,useDeleteComodin} = useContext(GameContext);
  const {rotate, imagePath, refImg} = useFicha(ficha);
  
  const onDragStart = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const width = ficha.numberOfPiezas <= 2 && !ficha.hasSpaces ? 85.5 : 
    ficha.numberOfPiezas === 3 || ficha.numberOfPiezas === 5 || ficha.hasSpaces ? 171 : 128.25;
    const height = ficha.numberOfPiezas === 1 || (ficha.numberOfPiezas === 3 && !ficha.hasSpaces) ? 75 : 150;
    const x = (e.clientX/width - rect.left/width) * 100; 
    const y = (e.clientY/height - rect.top/height) * 100; 
    startDragging(ficha,getPiezaSelected(ficha,x,y));
  }

  const onDragEnd = (e: React.DragEvent<HTMLImageElement>) => stopDragging();

  const draggable = useMemo(
    () => !ficha.blocked && !isUsingHammer && !isUsingDelete,
    [ficha.blocked,isUsingHammer,isUsingDelete]
  );

  return (
    <>
      <img
        ref={refImg}
        alt="Ficha"
        src={`../../${imagePath}`}
        draggable={draggable}
        onClick={() => isUsingDelete ? useDeleteComodin(ficha) : rotate()}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{
          width: 
          ficha.numberOfPiezas <= 2 && !ficha.hasSpaces ? '85.5px' : 
          ficha.numberOfPiezas === 3 ? '171px' :
          ficha.numberOfPiezas === 4 ? '128.25px' : '171px',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
      />
      {
        isUsingDelete && 
        <HighlightOffTwoToneIcon
          className='fadeIn'      
          onClick={() => useDeleteComodin(ficha)}
          fontSize='large'
          color='error'
          style={{
            cursor: 'pointer',
            position: 'absolute',
            zIndex: 1000
          }}
        />
      }
    </>
  )
}