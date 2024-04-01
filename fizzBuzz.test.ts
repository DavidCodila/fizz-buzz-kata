import { test, expect } from "bun:test";
import { fizzBuzz } from "./fizzBuzz";

test("should return fizz for 3", () => {
  const result = fizzBuzz(3);
  expect(result).toEqual("Fizz");
});
