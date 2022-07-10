import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Confetti from 'react-confetti';

export const GameOverScreen = () => {
  const navigate = useNavigate();
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
      gap={2}
    >
        <Confetti/>
        <Typography variant="h1">Game Over</Typography>
        {
          (!Cookies.get('highestPoints')) || (Cookies.get('highestPoints') && Cookies.get('lastPoints') &&
          Number(Cookies.get('highestPoints')) === Number(Cookies.get('lastPoints'))) &&
          <Typography variant="h6">New high score!</Typography>
        }
        {
            Cookies.get('lastPoints') ?
            <Typography variant="h2">Last match points: {Cookies.get('lastPoints')}</Typography>
            : <Typography variant="h2">No Last match points recorded</Typography>
        }
        {
            Cookies.get('highestPoints') ?
            <Typography variant="h2">High score: {Cookies.get('highestPoints')}</Typography>
            : <Typography variant="h2">No high score recorded</Typography>
        }
        <Button
          size='large'
          color='primary'
          onClick={() => {
            navigate('/');
            setTimeout(() => window.location.reload(), 100);
          }}
        >
          Back to menu
        </Button>
    </Box>
  )
}