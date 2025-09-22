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