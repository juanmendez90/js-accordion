import { addStyles } from "../../src/utilities/helpers";

const className = "test";
describe("Add styles", () => {
  let htmlElement = null;

  beforeEach(() => {
    htmlElement = document.createElement("div");
  });
  afterEach(() => {
    htmlElement = null;
  });
  test("styles where added to the element", () => {
    addStyles(htmlElement, "add", className);
    expect(htmlElement.classList.contains(className)).toBe(true);
  });
});
