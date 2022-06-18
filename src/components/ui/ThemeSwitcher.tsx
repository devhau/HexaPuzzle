import { useContext } from 'react'
import { Button, ButtonGroup, useTheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeIcon from '@mui/icons-material/DarkModeTwoTone';
import { ThemeContext } from '../../context'

export const ThemeSwitcher = () => {
    const {currentTheme,changeTheme} = useContext(ThemeContext);
    const {palette} = useTheme();
    return (
        <ButtonGroup 
            className='fadeIn'
            sx={{
                backgroundColor: palette.info.main,
                borderRadius: 3
            }} 
            variant='outlined'
            size='small' 
            disableElevation
            aria-label="outlined primary button group"
        >
            <Button
                color={currentTheme === 'light' ?  'secondary' : 'primary'}
                onClick={() => changeTheme('light')}
            >
                <LightModeIcon />
            </Button>
            <Button
                color={currentTheme === 'dark' ?  'secondary' : 'primary'}
                onClick={() => changeTheme('dark')}
            >
                <DarkModeIcon />
            </Button>
            <Button
                color={currentTheme === 'system' ?  'secondary' : 'primary'}
                onClick={() => changeTheme('system')}
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                    }
                }}
            >
                Auto
            </Button>
        </ButtonGroup>
    )
}