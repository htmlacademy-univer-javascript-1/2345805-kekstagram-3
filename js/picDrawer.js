import { createObjects } from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPicsContainer = document.querySelector('.pictures');
const inputFragment = document.createDocumentFragment();
const objectsToDraw = createObjects(25);

const drawObjects = function() {
  objectsToDraw.forEach((object) => {
    const newPic = pictureTemplate.cloneNode(true);
    newPic.querySelector('.picture__img').src = object.url;
    newPic.querySelector('.picture__likes').textContent = object.likes;
    newPic.querySelector('.picture__comments').textContent = object.comments;
    inputFragment.append(newPic);
  });
  similarPicsContainer.append(inputFragment);
};

export {drawObjects};
