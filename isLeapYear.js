// 1. Write a program that determines if a given year is a leap year.
// A leap year is divisible by 4 but not by 100 unless also divisible by 400.

function isLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is NOT a leap year`;
  }
}
console.log(isLeapYear(2024));
