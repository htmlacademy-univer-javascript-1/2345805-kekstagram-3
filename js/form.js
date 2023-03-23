import { isEscapeKey } from './util.js';

const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

function cleaningForm() {
  downloadButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

const onFormEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeDownloadPicWindow();
  }
};

function openDownloadPicWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeDownloadPicWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleaningForm();
}

//added opening function on downloadButton
downloadButton.addEventListener('change', () => {
  openDownloadPicWindow();
});

//added closing function on cancelButton
cancelButton.addEventListener('click', () => {
  closeDownloadPicWindow();
});


