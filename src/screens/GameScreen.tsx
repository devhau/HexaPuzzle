import { Box } from '@mui/material'
import { Inventory } from '../components/game/Inventory'
import { Tablero } from '../components/game/Tablero'

export const GameScreen = () => {
  return (
    <Box
        display="flex"
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