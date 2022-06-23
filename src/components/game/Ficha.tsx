import { FC } from 'react';
import { FichaHexagonal } from '../../logic/classes/FichaHexagonal';

interface Props {
    ficha: FichaHexagonal;
}

export const Ficha: FC<Props> = ({ficha}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>Ficha</div>
  )
}