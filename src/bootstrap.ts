import { CONTROLLER_PATH_META_KEY, HTTP_ROUTE_META_KEY } from './decorators/index.js';
import { PathVO } from './models/path.vo.js';
import { Route } from './models/route.js';
import { ControllerRegistry, RouteRegistry } from './registries/index.js';

export class DiMiniFactory {
  public static async create() {
    const controllers = ControllerRegistry.getAll();

    for (const controller of controllers) {
      const controllerPath = Reflect.getMetadata(CONTROLLER_PATH_META_KEY, controller);
      if (!controllerPath) continue;

      const methodNames = Object.getOwnPropertyNames(controller.prototype);

      for (const methodName of methodNames) {
        const routeInfo = Reflect.getMetadata(HTTP_ROUTE_META_KEY, controller.prototype, methodName);

        if (routeInfo) {
          const { method, path } = routeInfo;
          const route = new Route(method, new PathVO(controllerPath), new PathVO(path), methodName);
          RouteRegistry.register(route);
        }
      }
    }
  }
}
