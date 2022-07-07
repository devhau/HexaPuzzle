import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import { DragAndDropContext, GameContext } from '../context';
import { Inventory } from '../components/game/Inventory'
import { Tablero } from '../components/game/Tablero'
import { Comodin } from '../components/game/Comodin';

export const GameScreen = () => {
  const navigate = useNavigate()
  const {isDragging} = useContext(DragAndDropContext);
  const {
    toggleHammer,
    toggleDelete,
    isUsingHammer,
    isUsingDelete,
    canUseComodin,
    comodins,
    gameOver
  } = useContext(GameContext);
  const {hammerComodin,deleteComodin} = comodins;

  useEffect(() => {
    if(gameOver) navigate('/game-over');
  },[gameOver]);

  return (
    <Box
      display={{
        xs: 'none',
        md: 'flex',
      }}
      flexDirection="column"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Tablero/>
      <Inventory/>
      <Box
        display='flex'
        position='absolute'
        bottom='50px'
        left='50px'
        gap={2}
      >
        <Comodin
          icon={<GavelRoundedIcon fontSize='inherit'/>}
          onClick={toggleHammer}
          disabled={!canUseComodin(hammerComodin) || isUsingDelete || isDragging}
          cost={hammerComodin.costo}
        />
        <Comodin
          icon={<DeleteTwoToneIcon fontSize='inherit'/>}
          onClick={toggleDelete}
          disabled={!canUseComodin(deleteComodin) || isUsingHammer || isDragging}
          cost={deleteComodin.costo}
        />
      </Box>
    </Box>
  )
}