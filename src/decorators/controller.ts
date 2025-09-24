import { Injectable } from './injectable.js';

export function Controller(path: string): ClassDecorator {
  return function (target: any) {
    Injectable()(target);
  };
}
