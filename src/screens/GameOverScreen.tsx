import { Box, Typography } from '@mui/material'
import Cookies from 'js-cookie';
import Confetti from 'react-confetti';

export const GameOverScreen = () => {
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
            Cookies.get('lastPoints') ?
            <Typography variant="h2">Last match points: {Cookies.get('lastPoints')}</Typography>
            : <Typography variant="h2">No Last match points recorded</Typography>
        }
        {
            Cookies.get('highestPoints') ?
            <Typography variant="h2">Best score: {Cookies.get('highestPoints')}</Typography>
            : <Typography variant="h2">No best score recorded</Typography>
        }
    </Box>
  )
}