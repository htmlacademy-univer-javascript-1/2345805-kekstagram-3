// import { errorSending } from './form-error.js';
import { showErrorAlert } from './util.js';


const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((pics) => onSuccess(pics))
    .catch(() => {
      showErrorAlert('Не удалось подгрузить изображения');
    });
};

const sendForm = (success, error, formData) => {

  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        success();
      } else {
        error();
      }
    })
    .catch(() => error());
};


export { getData, sendForm };
