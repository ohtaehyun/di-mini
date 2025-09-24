import { PathVO } from '../models/index.js';
import type { HttpMethod } from '../types/index.js';

function createHttpMethodDecorator(method: HttpMethod) {
  return function httpMethodDecorator(path: string): MethodDecorator {
    return function (target: any, propertyKey: string | symbol | undefined) {
      if (!propertyKey) throw new Error('HTTP method decorators can only be applied to methods');

      Reflect.defineMetadata(HTTP_ROUTE_META_KEY, { method, path: new PathVO(path).toString() }, target, propertyKey);
    };
  };
}

export const HTTP_ROUTE_META_KEY = 'http:route';
export const Get = createHttpMethodDecorator('GET');
export const Post = createHttpMethodDecorator('POST');
export const Put = createHttpMethodDecorator('PUT');
export const Delete = createHttpMethodDecorator('DELETE');
export const Patch = createHttpMethodDecorator('PATCH');
