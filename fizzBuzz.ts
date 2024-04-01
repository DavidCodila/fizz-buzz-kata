export function fizzBuzz(number: number): string {
  var returnString = "";
  if (number % 3 == 0) {
    returnString += "Fizz";
  }
  if (number % 5 == 0) {
    returnString += "Buzz";
  }
  if (returnString == "") {
    return String(number);
  }
  return returnString;
}
