import { Container } from "../container/index.js";

export function Injectable(): ClassDecorator {
  return function (target: any) {
    const container = Container.getInstance();
    container.register(target, target);
  };
}