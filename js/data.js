import { getRandomNumber } from './util.js';

const comments = ['my mum', 'new day in life', 'i like this photo', 'amazing pic', 'some important thoughts', 'it is my vacation', 'playing with boys', 'my breakfast', 'my dad said it is funny', 'my dream', 'look at that, dude'];

const getDescription = () => comments[getRandomNumber(0, comments.length - 1)];

const createPicElement = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getDescription(),
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const createPicsList = (n) => {
  const picList = [];
  let counter = 1;
  while (counter !== n + 1) {
    picList.push(createPicElement(counter));
    counter++;
  }
  return picList;
};

export { createPicsList };
