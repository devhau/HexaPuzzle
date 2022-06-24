import { useContext, useMemo } from 'react';
import { Box, Grid } from '@mui/material';
import TableroImg from '../../assets/tablero.png';
import { GroupReceptor } from './GroupReceptor';
import { IndividualReceptor } from './IndividualReceptor';
import { DragAndDropContext } from '../../context';

export const Tablero = () => {
  const {isDragging,fichaDragging} = useContext(DragAndDropContext);
  const showIndividualReceptor = useMemo(() => 
    isDragging && fichaDragging && fichaDragging!.getNumberOfActivePiezas() <= 3,
    [isDragging,fichaDragging]
  )
  const showGroupReceptor = useMemo(() => 
    isDragging && fichaDragging && fichaDragging!.getNumberOfActivePiezas() >= 4,
    [isDragging,fichaDragging]
  )
  return (
    <Grid container
      sx={{
          backgroundColor: 'transparent',
          backgroundImage: `url(${TableroImg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '90%',
          height: '50%',
      }}
      spacing={0}
    >
      {
        showIndividualReceptor && 
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

      {
        showGroupReceptor &&
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={5}
          >
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
          </Box>
        </Grid>
      }

      { 
        showIndividualReceptor && 
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

      {
        showGroupReceptor &&
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={5}
          >
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
          </Box>
        </Grid>
      }

      {
        showIndividualReceptor &&  
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

      {
        showGroupReceptor &&
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={5}
          >
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
          </Box>
        </Grid>
    }

      {
        showIndividualReceptor && 
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

      {
        showGroupReceptor &&
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={5}
          >
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
          </Box>
        </Grid>
      }

      {
        showIndividualReceptor && 
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

      {
        showGroupReceptor &&
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              width: '30%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={5}
          >
            <GroupReceptor/>
            <GroupReceptor/>
            <GroupReceptor/>
          </Box>
        </Grid>
      }

      {
        showIndividualReceptor && 
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            gap={2.5}
          >
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
            <IndividualReceptor/>
          </Box>
        </Grid>
      }

    </Grid>
  )
}