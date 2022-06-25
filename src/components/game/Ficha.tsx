import { FC, useContext } from 'react';
import { Card, CardMedia } from '@mui/material';
import { DragAndDropContext } from '../../context';
import { useFicha } from '../../hooks';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';

interface Props {
  fichaInfo: FichaHexagonal;
}

export const Ficha: FC<Props> = ({fichaInfo}) => {

  const {ficha, rotar, imagePath} = useFicha(fichaInfo);
  const rotate = () => rotar();

  const {startDragging,stopDragging} = useContext(DragAndDropContext);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => startDragging(ficha);
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => stopDragging();

  return (
    <Card
      draggable
      onClick={rotate}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      sx={{
        width: ficha.getNumberOfActivePiezas() === 1 ? '37.5%' : 
          ficha.getNumberOfActivePiezas() === 2 ? '37.5%' : 
          ficha.getNumberOfActivePiezas() === 3 ? '80%' :
          ficha.getNumberOfActivePiezas() === 4 ? '60%' : '80%'
      }}
    >
      <CardMedia
        alt="Ficha"
        component='img'
        image={`../../${imagePath}`}
      /> 
    </Card>
  )
}