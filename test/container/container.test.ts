import "reflect-metadata";
import { Container } from "../../src/container/index.js";
import { describe, it, expect } from "vitest";
import { Inject, Injectable } from "../../src/decorators/index.js";

@Injectable()
class DependencyA {
  sayHello() {
    return "Hello A";
  }
}

@Injectable()
class DependencyB {
  constructor(@Inject() public depA: DependencyA) {}
}

@Injectable()
class DependencyC {
  constructor(public depA: DependencyA) {}
}

describe("Container", () => {
  it("should register and resolve dependencies", () => {
    const instanceA = Container.getInstance().resolve(DependencyA);
    expect(instanceA).toBeInstanceOf(DependencyA);
    expect(instanceA.sayHello()).toBe("Hello A");
  });

  it("should register and resolve parameters", () => {
    const instanceB = Container.getInstance().resolve(DependencyB);
    expect(instanceB).toBeInstanceOf(DependencyB);
    expect(instanceB.depA).toBeInstanceOf(DependencyA);
    expect(instanceB.depA.sayHello()).toBe("Hello A");
  });

  it("should register and resolve parameters without @Inject decorator", () => {
    const instanceC = Container.getInstance().resolve(DependencyC);
    expect(instanceC).toBeInstanceOf(DependencyC);
    expect(instanceC.depA).toBeInstanceOf(DependencyA);
    expect(instanceC.depA.sayHello()).toBe("Hello A");
  });
});
