export abstract class CrudDao<T> {
  abstract add(t: T): Promise<boolean>;
  abstract find(idinifier: number): Promise<T>;
  abstract edit(t: T): Promise<T>;
  abstract remove(t: T): boolean;
}
