import { useContext, useMemo } from 'react';
import { Grid } from '@mui/material';
import { GameContext } from '../../context/GameContext';
import { TableroRow } from './TableroRow';

export const Tablero = () => {
  const { tableroFormat } = useContext(GameContext);

  const tableroIdsArray = useMemo(() => {
    const array: number[][] = [];
    let cont = 1;
    for (let i = 1; i <= Object.keys(tableroFormat).length; i++) {
      array[i] = [];
      for (let j = 1; j <= tableroFormat[i]; j++) {
        array[i].push(cont);
        cont++;
      }
    }
    return array;
  }, []);

  return (
    <Grid container
      sx={{
        width: '100%',
        height: Object.keys(tableroFormat).length > 6 ? '65%' : '57.5%',
      }}
      direction='column'
    >
      {
        tableroIdsArray.map((row, index) => 
          <TableroRow
            key={index}
            row={row}
          ></TableroRow>
        )
      }
    </Grid>
  )
}