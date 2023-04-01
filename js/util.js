
//идея реализации взята с сайта https://learn.javascript.ru/task/random-int-min-max
const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isValueLongerThan = (value, length) => value.length <= length;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, isValueLongerThan, isEscapeKey};
