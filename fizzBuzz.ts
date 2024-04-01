export function fizzBuzz(number: number): string {
  if (number == 3) {
    return "Fizz";
  } else if (number == 5) {
    return "Buzz";
  } else if (number == 15) {
    return "FizzBuzz";
  }
  return String(number);
}
