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
        width: '90%',
        height: '50%',
      }}
      direction='column'
    >
      <TableroRow row={tableroIdsArray[1]} />
      <TableroRow row={tableroIdsArray[2]} />
      <TableroRow row={tableroIdsArray[3]} />
      <TableroRow row={tableroIdsArray[4]} />
      <TableroRow row={tableroIdsArray[5]} />
      <TableroRow row={tableroIdsArray[6]} />
    </Grid>
  )
}