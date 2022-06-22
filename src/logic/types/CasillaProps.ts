export type CasillaProps<AdyacenciaType,RotationType> = {
    active: boolean,
    id: number,
    adyacentes: AdyacenciaType,
    rotacion: RotationType
}