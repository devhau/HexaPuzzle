import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import Swal from 'sweetalert2'
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

  const theme = useTheme();
  useEffect(() => {
    if(gameOver){
      Swal.fire({
        title: 'Game Over',
        text: 'No puedes encajar mas piezas',
        allowOutsideClick: false,
        confirmButtonText: 'Exit',
        confirmButtonColor: theme.palette.secondary.main,
        width: 400,
        color: theme.palette.primary.main,
        background: theme.palette.info.main,
        imageUrl: 'https://i.giphy.com/media/iO4ptP2iuV29yui3mx/giphy.webp',
        imageWidth: 300,
        backdrop: true,
        position: 'top-right',
        customClass: {
          title: 'text'
        }
      }).then(() => navigate('/game-over'))
    } 
  },[gameOver]);

  return (
    <Box
      display={{
        xs: 'none',
        md: 'flex',
      }}
      flexDirection="column"
      width="100vw"
      minHeight='850px'
      height='100vh'
      justifyContent='center'
      alignItems='center'
      gap={window.innerHeight >= 900 ? 0 : 5}
    >
      <Tablero/>
      <Inventory/>
      <Box
        display='flex'
        position='fixed'
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