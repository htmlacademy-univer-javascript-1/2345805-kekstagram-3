//идея реализации взята с сайта https://learn.javascript.ru/task/random-int-min-max
const getRandomNumber = function(a, b) {
  if (a < 0 || b < 0 || b <= a) {
    console.log("Error: Incorrect input data");
    return;
  }
  return Math.floor(a + Math.random() * (b + 1 - a));
}

const checkLength = (currentStr, maxLength) => {
  return currentStr.length <= maxLength ? true : false;
}

checkLength('hello', 3);
getRandomNumber(0, 5);
