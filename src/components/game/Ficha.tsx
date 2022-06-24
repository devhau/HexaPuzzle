import { FC, useContext } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { DragAndDropContext } from '../../context';
import { useFicha } from '../../hooks/useFicha';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';
import TableroImg from '../../assets/tablero.jpeg';

interface Props {
  fichaInfo: FichaHexagonal;
}

export const Ficha: FC<Props> = ({fichaInfo}) => {

  const {ficha, rotar} = useFicha(fichaInfo);
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
        width: '80%',
        height: '100%'
      }}
    >
      <CardMedia
        alt="Ficha"
        component='img'
        image={TableroImg}
        height='100%'
      />
    </Card>
  )
}