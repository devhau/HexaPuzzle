export const IndividualReceptor = () => {
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    
  }
  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
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