import { Injectable } from "./injectable.js";
import { ControllerRegistry } from "../registries/index.js";

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);
    ControllerRegistry.register(path, target);
  };
}