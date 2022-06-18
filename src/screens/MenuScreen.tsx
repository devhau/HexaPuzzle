import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export const MenuScreen = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
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
  )
}