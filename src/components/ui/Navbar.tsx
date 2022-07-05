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
                paddingTop: '10px',
            }}
        >
            <Toolbar>
                <Box
                    display="flex"
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