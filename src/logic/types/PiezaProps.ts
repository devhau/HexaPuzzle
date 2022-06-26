export type PiezaProps<AdyacenciaType,PositionType,RotationType> = {
    active: boolean,
    adyacentes?: AdyacenciaType, 
    position: PositionType, 
    rotacion: RotationType
}