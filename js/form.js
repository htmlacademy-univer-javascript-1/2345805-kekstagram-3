import { isEscapeKey } from './util.js';

const uploadFileElement = document.querySelector('#upload-file');
const closeFormElement = document.querySelector('#upload-cancel');
const hashtagInputElement = document.querySelector('.text__hashtags');
const commentInputElement = document.querySelector('.text__description');


const cleaningForm = () => {
  uploadFileElement.value = '';
  hashtagInputElement.value = '';
  commentInputElement.value = '';
};

const openDownloadPicWindow = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscapeKeyDown);
};

const closeDownloadPicWindow = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleaningForm();
};

function onFormEscapeKeyDown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeDownloadPicWindow();
  }
}

//added opening function on downloadButton
uploadFileElement.addEventListener('change', () => {
  openDownloadPicWindow();
});

//added closing function on cancelButton
closeFormElement.addEventListener('click', () => {
  closeDownloadPicWindow();
});
