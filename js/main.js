//идея реализации взята с сайта https://learn.javascript.ru/task/random-int-min-max
const getRandomNumber = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkLength = (string, length) => string.length <= length;

checkLength('hello', 3);
getRandomNumber(0, 5);
