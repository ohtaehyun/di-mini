import { Injectable } from "./injectable.js";
import { ControllerRegistry } from "../registries/index.js";
import { PathVO } from "../models/path.vo.js";

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);
    ControllerRegistry.register(new PathVO(path).toString(), target);
  };
}