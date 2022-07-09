import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export const MenuScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Particles
        id="tsparticles"
        url='./src/helpers/particles.json'
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
        <Button
          size='large'
          onClick={() => navigate('/game')}
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
      </Box>
      <Box
        display={{
          xs: 'flex',
          md: 'none',
        }}
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant='h5'>
          Not available in mobile devices for now
        </Typography>
      </Box>
    </>
  )
}