export interface Condition{
    cumple: boolean;
    action(): void;
}