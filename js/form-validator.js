import { isValueLongerThan } from './util.js';


const uploadImageForm = document.querySelector('.img-upload__form');
const hashTagReg = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');
const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;


const pristine  = new Pristine(uploadImageForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateCommentSection  = (value) => !isValueLongerThan(value, 19) && isValueLongerThan(value, 140);
const validateHashTag = (value) => isValueLongerThan(value, 0) || hashTagReg.test(value);

pristine.addValidator(uploadImageForm.querySelector('.text__description'), validateCommentSection, `От ${MIN_COMMENT_LENGTH} до ${MAX_COMMENT_LENGTH} символов`);
pristine.addValidator(uploadImageForm.querySelector('.text__hashtags'), validateHashTag, 'Хештег должен начинаться с #, включать в себя только русские и латинские символы и не превышать длины 20 символов');


const addValidator = () => {
  uploadImageForm.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

export {addValidator};
