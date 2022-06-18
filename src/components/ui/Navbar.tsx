import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { ThemeSwitcher } from './ThemeSwitcher'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

export const Navbar = () => {
  return (
    <AppBar
        style={{
            paddingTop: '10px',
        }}
    >
        <Toolbar>
            <Box
                display="flex"
                width="100vw" 
                //justifyContent='space-between'
            >
                <Typography variant="h6" sx={{
                    fontSize: {
                        md: '22px',
                    }
                }}>
                    <AttachMoneyRoundedIcon sx={{
                        fontSize: {
                            sm: '14px',
                            md: '26px',
                        }
                    }}/> 
                    2711
                </Typography>
                <Box flex={{xs: 1.2, md: 0.67}} />
                <Typography variant="h1" sx={{
                    fontSize: {
                        md: '36px',
                    }
                }}>HexaPuzzle</Typography>
                <Box flex={{xs: 1, md: 0.62}} />
                <ThemeSwitcher/>
            </Box>
        </Toolbar>
    </AppBar>
  )
}