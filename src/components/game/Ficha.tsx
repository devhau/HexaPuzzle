import { FC, useContext } from 'react';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { DragAndDropContext, GameContext } from '../../context';
import { useFicha } from '../../hooks';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';
import { getPiezaSelected } from '../../helpers/PiezaSelected';

interface Props {
  fichaInfo: FichaHexagonal;
}

export const Ficha: FC<Props> = ({fichaInfo}) => {
  const {startDragging,stopDragging} = useContext(DragAndDropContext);
  const {isUsingHammer,isUsingDelete,useDeleteComodin} = useContext(GameContext);
  const {ficha, rotate, imagePath, refImg} = useFicha(fichaInfo);
  
  const onDragStart = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const width = ficha.numberOfPiezas <= 2 ? 85.5 : 
    ficha.numberOfPiezas === 3 || ficha.numberOfPiezas === 5 ? 171 : 128.25;
    const height = ficha.numberOfPiezas === 1 || ficha.numberOfPiezas === 3 ? 75 : 150;
    const x = (e.clientX/width - rect.left/width) * 100; 
    const y = (e.clientY/height - rect.top/height) * 100; 
    startDragging(fichaInfo,getPiezaSelected(ficha,x,y));
  }

  const onDragEnd = (e: React.DragEvent<HTMLImageElement>) => stopDragging();

  return (
    <>
      <img
        ref={refImg}
        alt="Ficha"
        src={`../../${imagePath}`}
        draggable={!isUsingHammer && !isUsingDelete}
        onClick={() => isUsingDelete ? useDeleteComodin(fichaInfo) : rotate()}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        style={{
          width: ficha.numberOfPiezas === 1 ? '85.5px' : 
          ficha.numberOfPiezas === 2 ? '85.5px' : 
          ficha.numberOfPiezas === 3 ? '171px' :
          ficha.numberOfPiezas === 4 ? '128.25px' : '171px',
          height: ficha.numberOfPiezas === 1 || ficha.numberOfPiezas === 3 ? '75px' : '150px',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
      />
      {
        isUsingDelete && 
        <HighlightOffTwoToneIcon
          onClick={() => useDeleteComodin(fichaInfo)}
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