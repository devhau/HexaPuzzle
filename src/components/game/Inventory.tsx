import { useMemo } from 'react';
import { Grid } from '@mui/material'
import { Ficha } from './Ficha';
import { FichaHexagonalFactory } from '../../logic/classes/FichaHexagonalFactory';
import { FichaHexagonalInventory } from '../../logic/classes/FichaHexagonalInventory';
import { useInventory } from '../../hooks';

export const Inventory = () => {
  const factory = useMemo(() => new FichaHexagonalFactory(),[]);
  const inventory = useMemo(() => new FichaHexagonalInventory(factory,3),[]);
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