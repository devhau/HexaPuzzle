import { FC } from 'react'
import { Grid } from '@mui/material';
import { CasillaTriangular } from '../../logic/classes/CasillaTriangular';
import { Casilla } from './Casilla';

interface Props {
    row: number[];
    tablero: CasillaTriangular[];
}

export const TableroRow: FC<Props> = ({row, tablero}) => {
  return (
    <Grid item display='flex' justifyContent='center' alignItems='center' height='75px' margin='2.5px 0'>
        {
          row.map(id => <Casilla key={id} casilla={tablero[id - 1]} />)
        }
    </Grid>
  )
}