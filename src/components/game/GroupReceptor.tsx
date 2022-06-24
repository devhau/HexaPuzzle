export const GroupReceptor = () => {
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
        width: '60px',
        height: '95px',
        backgroundColor: 'red'
      }}
    >a</div>
  )
}