import { beforeEach, describe, expect, it } from 'vitest';
import { ControllerRegistry } from '../../src/registries/controller-registry.js';

class UserController {}
class ProductController {}

describe('ControllerRegistry', () => {
  beforeEach(() => {
    ControllerRegistry.clear();
  });

  it('should register and retrieve a controller', () => {
    ControllerRegistry.register('/users', UserController);
    const retrieved = ControllerRegistry.getController('/users');
    expect(retrieved).toBe(UserController);
  });

  it('should throw an error when registering a controller with an existing path', () => {
    const path = '/users';
    ControllerRegistry.register(path, UserController);
    expect(() => {
      ControllerRegistry.register(path, ProductController);
    }).toThrowError(`Controller with path ${path} is already registered.`);
  });

  it('should throw an error when retrieving a non-registered controller', () => {
    expect(() => {
      ControllerRegistry.getController('/non-existent');
    }).toThrowError(`Controller with path /non-existent is not registered.`);
  });
});
