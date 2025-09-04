export class Container {
  private static instance: Container;

  private constructor() {}

  public static getInstance(): Container {
    return Container.instance ?? (Container.instance = new Container());
  }
}
