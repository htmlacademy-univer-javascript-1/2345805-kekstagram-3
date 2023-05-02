
import { isEscapeKey } from './util.js';
import { initScaleEditor, resetScale } from './scale-editor.js';
import { initEffectController, resetEffectController } from './effect-controller.js';
import { setUserFormSubmit } from './form-validator.js';
import { errorSending } from './fail-form-sending.js';
import { successSending } from './success-form-sending.js';

const uploadFileElement = document.querySelector('#upload-file');
const closeFormElement = document.querySelector('#upload-cancel');
const hashtagInputElement = document.querySelector('.text__hashtags');
const commentInputElement = document.querySelector('.text__description');
const formElement =  document.querySelector('.img-upload__overlay');

const cleaningForm = () => {
  uploadFileElement.value = '';
  hashtagInputElement.value = '';
  commentInputElement.value = '';
  resetEffectController();
  resetScale();
};

const openDownloadPicWindow = () => {
  formElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeyDown);
};

const closeDownloadPicWindow = () => {
  formElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleaningForm();
};

const initForm = () => {

  uploadFileElement.addEventListener('change', () => {
    openDownloadPicWindow();
  });

  closeFormElement.addEventListener('click', () => {
    closeDownloadPicWindow();
  });

  initScaleEditor();
  initEffectController();
  setUserFormSubmit(successSending, errorSending);
};

function onFormEscapeKeyDown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeDownloadPicWindow();
  }
}

export {initForm, openDownloadPicWindow, closeDownloadPicWindow, onFormEscapeKeyDown };
