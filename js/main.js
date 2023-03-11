//идея реализации взята с сайта https://learn.javascript.ru/task/random-int-min-max
const getRandomNumber = function(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkLength = (string, length) => string.length <= length;

checkLength('hello', 3);
getRandomNumber(0, 5);

const NUMBER_OF_OBJECTS = 25;

function getDescription() {
  const comments = ['my mum', 'new day in life', 'i like this photo',
  'amazing pic', 'some important thoughts', `it's my vacation`, 'playing with boys',
  'my breakfast', 'my dad said it is funny', 'my dream', 'look at that, dude'];
  return comments[getRandomNumber(0, comments.length-1)];
};

const createObject = (i) => {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getDescription(),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
};

function createObjects(n) {
  let objects = [];
  let counter = 1;
  while (counter !== n+1) {
    objects.push(createObject(counter));
    counter++;
  }
  return objects;
};

createObject(NUMBER_OF_OBJECTS);


