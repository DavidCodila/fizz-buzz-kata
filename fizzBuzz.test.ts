import { test, expect } from "bun:test";
import { fizzBuzz } from "./fizzBuzz";

test("should return fizz for 3", () => {
  const result = fizzBuzz(3);
  expect(result).toEqual("Fizz");
});

test("should return 4 for being passed 4", () => {
  const result = fizzBuzz(4);
  expect(result).toEqual("4");
});

test("should return Buzz for being passed 5", () => {
  const result = fizzBuzz(5);
  expect(result).toEqual("Buzz");
});
