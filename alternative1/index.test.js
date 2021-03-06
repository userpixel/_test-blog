// To keep it simple we stick with Node's assert module instead of using something more common line chai
import assert from "assert";
import { _test, sumShapeAreas } from "./index.js";

describe("squareArea()", () => {
  // The reference to this function is local to this block
  const { squareArea } = _test;

  it("calculates the area ofa square", () => {
    // We re not going to test all the edge cases, to keep the demo short
    assert.equal(squareArea(3), 9);
  });
});

describe("circleArea()", () => {
  const { circleArea } = _test;

  it("calculates the area of a circle", () => {
    assert.equal(circleArea(3), Math.PI * 9);
  });
});

describe("shapeArea()", () => {
  const { shapeArea } = _test;

  it("calculates the area of a shape object", () => {
    assert.equal(shapeArea({ type: "square", a: 4 }), 16);
    assert.equal(shapeArea({ type: "circle", r: 5 }), Math.PI * 25);
  });
});

describe("sumShapeAreas()", () => {
  it("calculates the sum of the areas of all the shapes in the array", () => {
    assert.equal(
      sumShapeAreas([
        { type: "square", a: 7 },
        { type: "circle", r: 13 },
      ]),
      49 + Math.PI * 169
    );
  });
});
