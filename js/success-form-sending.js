import { closeDownloadPicWindow } from './form.js';
import { isEscapeKey } from './util.js';
const successMessageElement = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

const closeSuccessElement = () => {
  successMessageElement.remove();
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  document.removeEventListener('click', onPopUpClick);
};

const successSending = () => {
  closeDownloadPicWindow();
  const successButton = successMessageElement.querySelector('.success__button');
  document.addEventListener('keydown', onFormEscapeKeyDown);
  document.addEventListener('click', onPopUpClick);
  successButton.addEventListener('click', () => {
    closeSuccessElement();
  });
  document.body.append(successMessageElement);
};

function onFormEscapeKeyDown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessElement();
  }
}

function onPopUpClick(evt) {
  evt.preventDefault();
  closeSuccessElement();
}

export {successSending};

