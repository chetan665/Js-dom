// Array Practice - Basic JavaScript

// 1. Filter prices less than 500
let prices = [100, 850, 450, 1200, 300, 999];

function getAffordablePrices(prices) {
  let result = [];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 500) {
      result.push(prices[i]);
    }
  }

  return result;
}

console.log('Affordable Prices:', getAffordablePrices(prices));

// 2. Get failed students (marks < 50)
let marks = [45, 78, 90, 33, 67, 55, 80, 22];

function getFailedStudents(marks) {
  let result = [];

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 50) {
      result.push(marks[i]);
    }
  }

  return result;
}

console.log('Failed Students:', getFailedStudents(marks));

// 3. Calculate total sum
let numbers = [10, 20, 30, 40, 50];

function getTotalSum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  return total;
}

console.log('Total Sum:', getTotalSum(numbers));

// 4. Sum of passed students (marks > 50)
function getPassedSum(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 50) {
      total = total + marks[i];
    }
  }

  return total;
}

console.log('Passed Students Sum:', getPassedSum(marks));
