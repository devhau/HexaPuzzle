import { Box } from '@mui/material'
import { Inventory } from '../components/game/Inventory'
import { Tablero } from '../components/game/Tablero'

export const GameScreen = () => {
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
    </Box>
  )
}