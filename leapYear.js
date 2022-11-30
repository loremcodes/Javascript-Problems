/* 
3. Check if a given year is leap year or not. Return true if it a leap year otherwise return false
leap year -> multiple of 400 or 4 and not 100
input -> 2020
output -> true
*/

isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 != 0) return true
};

console.log(isLeapYear(2020))
