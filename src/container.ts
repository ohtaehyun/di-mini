export class Container {
  private static instance: Container;
  private static dependencies = new Map<string, any>();

  private constructor() {}

  public static getInstance(): Container {
    return Container.instance ?? (Container.instance = new Container());
  }

  public register(key: string, value: any): void {
    if (Container.dependencies.has(key)) {
      throw new Error(`Dependency with key ${key} is already registered.`);
    }

    Container.dependencies.set(key, value);
  }

  public resolve<T>(key: string): T {
    const target = Container.dependencies.get(key);

    if (!target) {
      throw new Error(`No dependency found for key: ${key}`);
    }

    const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", target) || [];

    const injections = paramTypes.map((_: any, index: number) => {
      const injectKey = Reflect.getMetadata(`inject:${index}`, target);
      if (!injectKey) {
        throw new Error(`No injection metadata found for parameter at index ${index} of ${key}`);
      }
      return this.resolve(injectKey);
    });

    return new target(...injections);
  }
}
