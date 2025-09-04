export class Container {
  private static instance: Container;
  private static dependencies = new Map<string, any>();

  private constructor() {}

  public static getInstance(): Container {
    return Container.instance ?? (Container.instance = new Container());
  }

  public register(key: string, value: any): void {
    Container.dependencies.set(key, value);
  }
}
