import { useContext, useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { GameContext } from '../../context/GameContext';
import { ThemeSwitcher } from './ThemeSwitcher'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

export const Navbar = () => {
    const {points} = useContext(GameContext);
    return (
        <AppBar
            style={{
                paddingBottom: '10px'
            }}
        >
            <Toolbar>
                <Box
                    display="flex"
                    alignItems="center"
                    width="100vw" 
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
                        {points}
                    </Typography>
                    <Box flex={{xs: 1.2, md: 0.7}} />
                    <Typography 
                        variant="h1" 
                        className='animatedText'
                        sx={{
                            fontSize: {
                                md: '40px',
                            }
                        }}
                    >
                        HexaPuzzle
                    </Typography>
                    <Box flex={{xs: 1, md: 0.6}} />
                    <ThemeSwitcher/>
                </Box>
            </Toolbar>
        </AppBar>
    )
}