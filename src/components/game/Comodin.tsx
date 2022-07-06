import { FC } from 'react';
import { Badge, IconButton } from '@mui/material';

interface Props{
    icon: JSX.Element;
    disabled: boolean;
    cost: number;
    onClick: () => void;
}

export const Comodin: FC<Props> = ({icon,onClick,disabled,cost}) => {
    return (
        <IconButton 
            onClick={onClick}
            size="large"
            disabled={disabled}
        >
            <Badge 
                badgeContent={cost} 
                max={1000} 
            >
                {icon}
            </Badge>
        </IconButton>
    )
}