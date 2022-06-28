import { useContext } from 'react';
import { Box } from '@mui/material'
import { Inventory } from '../components/game/Inventory'
import { Tablero } from '../components/game/Tablero'
import { GameContext } from '../context';

export const GameScreen = () => {
  const {tablero} = useContext(GameContext);
  return (
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
        rowGap={10}
      >
        <Tablero/>
        <Inventory/>
    </Box>
  )
}