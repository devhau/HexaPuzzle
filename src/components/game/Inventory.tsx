import { useContext, useState, useEffect } from 'react';
import { Grid } from '@mui/material'
import { GameContext } from '../../context/GameContext';
import { Ficha } from './Ficha';

export const Inventory = () => {
  const {fichas} = useContext(GameContext);
  const [fichaList,setFichaList] = useState(fichas);
  useEffect(() => {
    setFichaList([...fichas]);
  },[fichas[0],fichas[1],fichas[2]]);
  return (
    <Grid 
      container 
      sx={{
        width: '40%',
        height: '10%'
      }}
    >
      {
        fichaList.map((item,i) => (
          <Grid item key={i} 
            xs={12/fichaList.length} 
            justifyContent='center' 
            display='flex'
          >
            <Ficha fichaInfo={item}/>
          </Grid>
        ))
      }
    </Grid>
  )
}