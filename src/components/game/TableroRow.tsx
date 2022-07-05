import { FC, useContext } from 'react';
import { Grid } from '@mui/material';
import { Casilla } from './Casilla';
import { GameContext } from '../../context';

interface Props {
  row: number[];
}

export const TableroRow: FC<Props> = ({row}) => {
  const {tablero} = useContext(GameContext);
  return (
    <Grid 
      item 
      display='flex' 
      justifyContent='center' 
      alignItems='center' 
      height='75px' 
      margin='1.25px 0'
    >
      {
        row.map(id => <Casilla key={id} casilla={tablero[id - 1]} />)
      }
    </Grid>
  )
}