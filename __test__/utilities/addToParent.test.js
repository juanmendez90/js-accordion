import { appendToParent } from "../../src/utilities/helpers";

describe("Append element to parent", () => {
  let parent = null;
  let child = null;
  let children = [];

  beforeEach(() => {
    parent = document.createElement("div");
    child = document.createElement("div");
    children.push(child);
  });
  afterEach(() => {
    parent = null;
    child = null;
    children = [];
  });
  test("classes where added to the element", () => {
    expect(parent.childNodes.length).toBe(0);
    appendToParent(children, parent);
    expect(parent.childNodes.length).toBe(1);
  });
});
