import { FC } from 'react';
import { Navbar } from '../components/ui/Navbar';

interface Props {
    children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}