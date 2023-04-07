import { renderPics } from './pic-render.js';
import { showAlert } from './util.js';


const getPics = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((pics) => renderPics(pics))
    .catch(() => {
      showAlert('Не удалось подгрузить изображения');
    });
};


export {getPics};

