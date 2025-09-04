import { Container } from "./container.js";

export function Injectable(): ClassDecorator {
  return function (target: any) {
    const container = Container.getInstance();
    container.register(target.name, target);
  };
}

export function Inject(key?: string): ParameterDecorator {
  return function (target, propertyKey, parameterIndex) {
    const types =
      propertyKey === undefined
        ? Reflect.getMetadata("design:paramtypes", target)
        : Reflect.getMetadata("design:paramtypes", target, propertyKey);

    const reflectKey = key ?? types?.[parameterIndex]?.name;
    Reflect.defineMetadata(`inject:${parameterIndex}`, reflectKey, target);
  };
}
