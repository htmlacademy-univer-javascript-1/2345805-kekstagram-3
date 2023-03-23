
//идея реализации взята с сайта https://learn.javascript.ru/task/random-int-min-max
const getRandomNumber = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const stringNotLongerLength = (string, length) => string.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, stringNotLongerLength, isEscapeKey};
