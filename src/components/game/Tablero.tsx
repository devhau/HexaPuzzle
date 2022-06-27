import { useContext, useMemo } from 'react';
import { Box, Grid } from '@mui/material';
import { Casilla } from './Casilla';
import { ThemeContext } from '../../context/ThemeContext';
import TableroLight from '../../assets/tablero-light.png';
import TableroDark from '../../assets/tablero-dark.png';
import { GameContext } from '../../context/GameContext';

export const Tablero = () => {
  const {mode} = useContext(ThemeContext);
  const {tableroFormat} = useContext(GameContext);

  const tableroIdsArray = useMemo(() =>{
    const array: number[][] = [];
    for(let i = 1; i <= Object.keys(tableroFormat).length; i++){
      array[i] = [];
      for(let j = 1; j <= tableroFormat[i]; j++){
        array[i].push(i*j);
      }
    }
    return array;
  }, []);

  return (
    <Grid container
      sx={{
          backgroundColor: 'transparent',
          backgroundImage: `url(${mode === 'light' ? TableroLight : TableroDark})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '90%',
          height: '50%',
      }}
      spacing={0}
    >
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[1].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[2].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[3].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[4].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[5].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2.5}
        >
          {
            tableroIdsArray[6].map(id => <Casilla key={id}/>)
          }
        </Box>
      </Grid>

    </Grid>
  )
}