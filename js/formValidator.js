import { stringNotLongerLength } from './util.js';

const form = document.querySelector('.img-upload__form');
const hashTagPattern = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(form.querySelector('.text__description'), validateCommentSection, 'От 20 до 140 символов');
pristine.addValidator(form.querySelector('.text__hashtags'), validateHashTag, 'Хештег должен начинаться с #, включать в себя только русские и латинские символы и не превышать длины 20 символов');

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function validateCommentSection (value) {
  return !stringNotLongerLength(value, 19) && stringNotLongerLength(value, 140);
}

function validateHashTag(value) {
  return stringNotLongerLength(value, 0) || hashTagPattern.test(value);
}


