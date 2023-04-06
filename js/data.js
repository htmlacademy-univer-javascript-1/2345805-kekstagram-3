import { getRandomNumber } from './util.js';

const NUMBER_OF_PICS = 25;
const comments = ['my mum', 'new day in life', 'i like this photo', 'amazing pic', 'some important thoughts', 'it is my vacation', 'playing with boys', 'my breakfast', 'my dad said it is funny', 'my dream', 'look at that, dude'];

const getDescription = () => comments[getRandomNumber(0, comments.length - 1)];

const createPicElement = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getDescription(),
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const createPicsList = () => {
  const picList = [];
  let counter = 1;
  while (counter !== NUMBER_OF_PICS + 1) {
    picList.push(createPicElement(counter));
    counter++;
  }
  return picList;
};

export { createPicsList };
