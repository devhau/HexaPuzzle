export interface Restriction<E>{
    cumple: boolean;
    event: E;
    triggerAction(): void;
}

export interface RestrictionManagerType<E> {
    restrictions: {restriction: Restriction<E>, order: number}[];
    check(): void;
}