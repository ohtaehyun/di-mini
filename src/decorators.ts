import { Container } from "./container.js";

export function Injectable(): ClassDecorator {
  return function (target: any) {
    const container = Container.getInstance();
    container.register(target.name, target);
  };
}
