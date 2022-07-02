import { FC, useContext, useRef } from 'react';
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
  const {ficha, rotar, imagePath} = useFicha(fichaInfo);

  const refImg = useRef<HTMLImageElement>(null);
  const isRotating = useRef(false);

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

  const onDragStart = (e: React.DragEvent<HTMLImageElement>) => startDragging(ficha);

  const getCoordsSelected = (e: any) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    console.log(getPiezaSelected(ficha,x,y))
  }

  const onDragEnd = (e: React.DragEvent<HTMLImageElement>) => stopDragging();

  return (
    <img
      onMouseDown={getCoordsSelected}
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