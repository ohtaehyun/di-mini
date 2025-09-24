import type { Route } from '../models/route.js';

export class RouteRegistry {
  private static routeMap: Map<string, Route> = new Map();

  public static register(route: Route) {
    this.routeMap.set(route.identifier, route);
  }

  public static getRoute(identifier: string): Route {
    const route = this.routeMap.get(identifier);
    if (!route) {
      throw new Error(`Route with identifier ${identifier} is not registered.`);
    }
    return route;
  }
}
