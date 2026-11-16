// LAB 10 - JavaScript Answers

// 1. Create a people object with three friends
const people = {
  friends: []
};

const friend1 = {
  firstName: "Rahul",
  lastName: "Kumar",
  id: 1
};

const friend2 = {
  firstName: "Anu",
  lastName: "Sharma",
  id: 2
};

const friend3 = {
  firstName: "Vikram",
  lastName: "Rao",
  id: 3
};

people.friends.push(friend1, friend2, friend3);
console.log("Question 1:", people);

// 2. Manipulate an array of mixed data types
const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"]
];

theList.shift();
theList.pop();
theList.splice(1, 4);
theList.unshift("FIRST");
theList[2] = "MIDDLE";
theList[3] = "hello World";
theList.push("LAST");

console.log("Question 2:", theList);


// 3. Countdown using a recursive function
let start = 10;

function countdown(value) {
  if (value < 1) {
    return;
  }

  console.log(value);
  countdown(value - 1);
}

console.log("Question 3 - first countdown:");
countdown(start);

// Another countdown using a value greater than 0
function secondCountdown(value) {
  if (value > 0) {
    console.log(value);
    return secondCountdown(value - 1);
  }
}

console.log("Question 3 - second countdown:");
secondCountdown(start);


// 4. Basic calculator
const number1 = 20;
const number2 = 5;

function calculator(firstNumber, secondNumber, operation = "add") {
  if (operation === "add" || operation === "+") {
    return firstNumber + secondNumber;
  }

  if (operation === "subtract" || operation === "-") {
    return firstNumber - secondNumber;
  }

  return firstNumber + secondNumber;
}

console.log("Question 4 - add:", calculator(number1, number2, "add"));
console.log("Question 4 - subtract:", calculator(number1, number2, "subtract"));
console.log("Question 4 - default add:", calculator(number1, number2));


// 5. Find the largest of three numbers
const a = 12;
const b = 25;
const c = 18;

const largest = Math.max(a, b, c);
console.log("Question 5 - largest number:", largest);


// 6. Find simple interest and compound interest
const principal = 10000;
const rate = 5;
const years = 2;

const simpleInterest = (principal * rate * years) / 100;
const compoundAmount =
  principal * Math.pow(1 + rate / 100, years);
const compoundInterest = compoundAmount - principal;

console.log("Question 6 - simple interest:", simpleInterest);
console.log("Question 6 - compound interest:", compoundInterest);


// 7. Find prime numbers within a range
const lowerLimit = 1;
const upperLimit = 50;

console.log("Question 7 - prime numbers:");

for (let number = lowerLimit; number <= upperLimit; number++) {
  let isPrime = number > 1;

  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}


// 8. Print the multiplication table of a number
const tableNumber = 7;

console.log("Question 8 - multiplication table:");

for (let i = 1; i <= 10; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}


// 9. Display a weekday using switch case
const dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Question 9: Monday");
    break;
  case 2:
    console.log("Question 9: Tuesday");
    break;
  case 3:
    console.log("Question 9: Wednesday");
    break;
  case 4:
    console.log("Question 9: Thursday");
    break;
  case 5:
    console.log("Question 9: Friday");
    break;
  case 6:
    console.log("Question 9: Saturday");
    break;
  case 7:
    console.log("Question 9: Sunday");
    break;
  default:
    console.log("Question 9: Invalid day number");
}


// 10. Check whether a number is an Armstrong number
const armstrongNumber = 153;
let temporaryNumber = armstrongNumber;
let sum = 0;
const digits = String(armstrongNumber).length;

while (temporaryNumber > 0) {
  const digit = temporaryNumber % 10;
  sum += Math.pow(digit, digits);
  temporaryNumber = Math.floor(temporaryNumber / 10);
}

if (sum === armstrongNumber) {
  console.log("Question 10: Armstrong number");
} else {
  console.log("Question 10: Not an Armstrong number");
}
