import { Box } from '@mui/material';
import TableroImg from '../../assets/tablero.jpeg';

export const Tablero = () => {
  return (
    <Box
        sx={{
            backgroundImage: `url(${TableroImg})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '90%',
            height: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >

    </Box>
  )
}