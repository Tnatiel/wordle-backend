


export abstract class CrudDao<T> {
    abstract add(t: T): Promise<boolean>; 
    abstract find(t: T): Promise<T>;
    abstract edit(t: T): Promise<T>;
    abstract remove(t: T): boolean;
}