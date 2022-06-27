import { useMemo } from 'react';
import { Grid } from '@mui/material'
import { Ficha } from './Ficha';
import { FichaHexagonalInventory } from '../../logic/classes/FichaHexagonalInventory';
import { useInventory } from '../../hooks';

export const Inventory = () => {
  const inventory = useMemo(() => new FichaHexagonalInventory(3),[]);
  const {items} = useInventory(inventory);
  return (
    <Grid 
      container 
      sx={{
        width: '40%',
        height: '10%'
      }}
    >
      {items.map((item,i) => (
        <Grid item key={i} xs={12/items.length} justifyContent='center' display='flex'>
          <Ficha fichaInfo={item}/>
        </Grid>
      ))}
    </Grid>
  )
}