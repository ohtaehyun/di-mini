import type { Route } from '../models/route.js';

export class RouteRegistry {
  private static routeMap: Map<string, Route> = new Map();

  public static register(route: Route) {
    this.routeMap.set(route.fullPath, route);
  }
}
