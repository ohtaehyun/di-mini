import { Container } from "./container.js";
import { ControllerRegistry } from "./registries.js";

export function Injectable(): ClassDecorator {
  return function (target: any) {
    const container = Container.getInstance();
    container.register(target, target);
  };
}

export function Inject(key?: string): ParameterDecorator {
  return function (target, propertyKey, parameterIndex) {
    const types =
      propertyKey === undefined
        ? Reflect.getMetadata("design:paramtypes", target)
        : Reflect.getMetadata("design:paramtypes", target, propertyKey);

    const reflectKey = key ?? types?.[parameterIndex];
    Reflect.defineMetadata(`inject:${parameterIndex}`, reflectKey, target);
  };
}

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);
    ControllerRegistry.register(path, target);
  };
}
