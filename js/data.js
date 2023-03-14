import { getRandomNumber } from './util.js';

function getDescription() {
  const comments = ['my mum', 'new day in life', 'i like this photo',
    'amazing pic', 'some important thoughts', 'it is my vacation', 'playing with boys',
    'my breakfast', 'my dad said it is funny', 'my dream', 'look at that, dude'];
  return comments[getRandomNumber(0, comments.length-1)];
}

function createObject(i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getDescription(),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
}

function createObjects(n) {
  const objects = [];
  let counter = 1;
  while (counter !== n+1) {
    objects.push(createObject(counter));
    counter++;
  }
  return objects;
}

export {createObjects};
