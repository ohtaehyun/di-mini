import { PathVO } from '../models/index.js';
import type { HttpMethod } from '../types/index.js';

function createHttpMethodDecorator(method: HttpMethod) {
  return function httpMethodDecorator(path: string): MethodDecorator {
    return function (target: any, propertyKey: string | symbol) {
      Reflect.defineMetadata('route', { method, path: new PathVO(path).toString() }, target, propertyKey);
    };
  };
}

export const Get = createHttpMethodDecorator('GET');
export const Post = createHttpMethodDecorator('POST');
export const Put = createHttpMethodDecorator('PUT');
export const Delete = createHttpMethodDecorator('DELETE');
export const Patch = createHttpMethodDecorator('PATCH');
