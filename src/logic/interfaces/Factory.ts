export interface Factory<T>{
    generate(): T;
}