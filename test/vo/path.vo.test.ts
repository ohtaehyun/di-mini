import { describe, expect, it } from "vitest";
import { PathVO } from "../../src/models/path.vo.js";


describe("PathVO test", ()=> {
  it('empty root path test', () => {
    const path = new PathVO('');
    expect(path.toString()).toEqual('');
  });

  it('// parsing test', () => {
    const path = new PathVO('//user//:id');
    expect(path.toString()).toEqual('/user/:id');
  });

  it('remove last slash', () => {
    const path = new PathVO('/user/asd/');
    expect(path.toString()).toEqual('/user/asd');
  });

  it('start with slash', () => {
    const path = new PathVO('user');
    expect(path.toString()).toEqual('/user');
  })
});