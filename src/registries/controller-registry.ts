import type { ClassConstructor } from "../types/index.js";

export class ControllerRegistry {
  private static controllers: Map<string, ClassConstructor> = new Map();

  public static register(path: string, controller: ClassConstructor) {
    if (this.controllers.has(path)) {
      throw new Error(`Controller with path ${path} is already registered.`);
    }

    this.controllers.set(path, controller);
  }

  public static getController(path: string): ClassConstructor {
    const controller = this.controllers.get(path);
    if (!controller) {
      throw new Error(`Controller with path ${path} is not registered.`);
    }

    return controller;
  }

  public static clear() {
    this.controllers.clear();
  }
}