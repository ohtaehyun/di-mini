import { PathVO } from '../models/path.vo.js';
import { ControllerRegistry } from '../registries/controller-registry.js';
import { Injectable } from './injectable.js';

export const CONTROLLER_PATH_META_KEY = 'controller:path';

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);

    const controllerPath = new PathVO(path);
    Reflect.defineMetadata(CONTROLLER_PATH_META_KEY, controllerPath.toString(), target);
    ControllerRegistry.register(controllerPath.toString(), target);
  };
}
