import { isEscapeKey } from './util.js';
import { onFormEscapeKeyDown } from './form.js';
const errorMessageElement = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const formElement = document.querySelector('.img-upload__overlay');

const hideForm = () => {
  formElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
};

const closeErrorElement = () => {
  errorMessageElement.remove();
  document.removeEventListener('keydown', onErrorEscapeKeyDown);
  document.removeEventListener('click', onPopUpClick);
  formElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeyDown);
};

const errorSending = () => {
  hideForm();

  const errorButton = errorMessageElement.querySelector('.error__button');
  document.addEventListener('keydown', onErrorEscapeKeyDown);
  document.addEventListener('click', onPopUpClick);
  errorButton.addEventListener('click', () => {
    closeErrorElement();
  });
  document.body.append(errorMessageElement);
};

function onErrorEscapeKeyDown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorElement();
  }
}

function onPopUpClick(evt) {
  evt.preventDefault();
  closeErrorElement();
}

export {errorSending};
