import "reflect-metadata";
import { Container } from "../src/container.js";
import { describe, it, expect } from "vitest";
import { Injectable } from "../src/decorators.js";

describe("Container", () => {
  it("should register and resolve dependencies", () => {
    @Injectable()
    class DependencyA {
      sayHello() {
        return "Hello A";
      }
    }

    const instanceA = Container.getInstance().resolve("DependencyA");
    expect(instanceA).toBeInstanceOf(DependencyA);
    expect(instanceA.sayHello()).toBe("Hello A");
  });
});
