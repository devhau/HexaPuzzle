import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export const MenuScreen = () => {
  const navigate = useNavigate();
  return (
    <>
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
        >
          Jugar
        </Button>
        <Button
          size='large'
        >
          Otra opcion
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