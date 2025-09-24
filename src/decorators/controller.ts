import { PathVO } from '../models/path.vo.js';
import { Injectable } from './injectable.js';

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);
    Reflect.defineMetadata('controller:path', new PathVO(path).toString(), target);
  };
}
