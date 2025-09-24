import type { HttpMethod } from '../types/index.js';
import type { PathVO } from './path.vo.js';

export class Route {
  constructor(
    public readonly method: HttpMethod,
    public readonly controllerPath: PathVO,
    public readonly path: PathVO,
    public readonly handler: string,
  ) {}

  get fullPath(): string {
    return this.controllerPath.combine(this.path);
  }

  get identifier() {
    return `${this.method}:${this.fullPath}`;
  }

  static buildIdentifier(method: string, fullPath: string) {
    return `${method.toUpperCase()}:${fullPath}`;
  }
}
