import { Box, Button, Switch, Tooltip, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { GameContext } from '../context';
import ParticlesConfig from '../helpers/Particles';

export const MenuScreen = () => {
  const navigate = useNavigate();

  const [gameMode, setGameMode] = useState('normal')
  const [boardSize, setBoardSize] = useState('normal')
  const onGameStart = () => {
    Cookies.set('gameMode', gameMode)
    Cookies.set('boardSize', boardSize)
    navigate('/game')
    setTimeout(() => window.location.reload(), 100);
  }
  return (
    <>
      <Particles
        id="tsparticles"
        options={ParticlesConfig}
        init={loadFull}
      />
      <Box
        display={{
          xs: 'none',
          md: 'flex',
        }}
        gap={2}
        flexDirection="column"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            backdropFilter: 'blur(7.5px)',
            padding: 5,
            borderRadius: 5,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Button
            size='large'
            onClick={() => onGameStart()}
            variant="contained"
            color="secondary"
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              padding: '0.5rem 2rem'
            }}
          >
            Start Game
          </Button>
          <Box
            display='flex'
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title={gameMode === 'normal' ? 'for relax and fun' : 'colors are not what they appear'}>
              <Typography variant='h5'>
                Game mode: {gameMode}
              </Typography>
            </Tooltip>
            <Switch 
              color='secondary'
              checked={gameMode === 'normal'}
              onChange={() => gameMode === 'normal' ? setGameMode('insane') : setGameMode('normal')}
            />
          </Box>
          <Box
            display='flex'
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title='big is easier'>
              <Typography variant='h5'>
                Board size: {boardSize}
              </Typography>
            </Tooltip>
            <Switch 
              color='secondary'
              checked={boardSize === 'normal'}
              onChange={() => boardSize === 'normal' ? setBoardSize('big') : setBoardSize('normal')}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}