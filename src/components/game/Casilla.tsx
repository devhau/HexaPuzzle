import { useContext } from 'react';
import { DragAndDropContext } from '../../context/DragAndDropContext';

export const Casilla = () => {
  const {isDragging} = useContext(DragAndDropContext);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    
  }
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }

  if (!isDragging) return <></>;
  return (
    <div
      onDrop={onDrop} 
      onDragOver={allowDrop}
      style={{
        width: '30px',
        height: '75px',
        backgroundColor: 'red',
      }}
    >a</div>
  )
}