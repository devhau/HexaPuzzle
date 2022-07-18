import { useContext } from 'react';
import { Grid } from '@mui/material'
import { GameContext } from '../../context/GameContext';
import { Ficha } from './Ficha';

export const Inventory = () => {
  const {fichas} = useContext(GameContext);
  return (
    <Grid 
      container 
      sx={{
        width: '40%',
        height: '7.5%'
      }}
    >
      {
        fichas.map((item,i) => (
          <Grid item key={i} 
            xs={12/fichas.length}
            display='flex'
            alignItems='center' 
            justifyContent='center' 
          >
            <Ficha ficha={item} key={i}/>
          </Grid>
        ))
      }
    </Grid>
  )
}