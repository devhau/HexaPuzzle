import { FC, useContext } from 'react';
import { DragAndDropContext } from '../../context/DragAndDropContext';
import { CasillaTriangular } from '../../logic/classes/CasillaTriangular';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  casilla: CasillaTriangular;
}

export const Casilla: FC<Props> = ({casilla}) => {
  const {isDragging} = useContext(DragAndDropContext);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    
  }
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  if (!isDragging) return <></>;
  return (
    <div
      onDrop={onDrop} 
      onDragOver={allowDrop}
      style={{
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        rotate: isDragging && casilla.getRotacion() === 'VERTEXDOWN' ? '180deg' : '0deg',
        width: '90px',
        height: '80px',
        backgroundColor: 'red',
        margin: '0 -20.5px',
      }}
    ></div>
  )
}