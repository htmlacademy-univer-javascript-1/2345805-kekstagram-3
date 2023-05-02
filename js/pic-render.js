import { initForm } from './form.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPicsContainer = document.querySelector('.pictures');

const renderPics = (picsToRender) => {
  const inputFragment = document.createDocumentFragment();
  for (const pictureProperties of picsToRender) {
    const newPictureElement = pictureTemplate.cloneNode(true);
    newPictureElement.querySelector('.picture__img').src = pictureProperties.url;
    newPictureElement.querySelector('.picture__likes').textContent = pictureProperties.likes;
    newPictureElement.querySelector('.picture__comments').textContent = pictureProperties.comments;
    inputFragment.append(newPictureElement);
  }
  similarPicsContainer.append(inputFragment);

  initForm();
};


export {renderPics};
