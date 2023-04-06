const zoomInElement = document.querySelector('.scale__control--bigger');
const zoomOutElement = document.querySelector('.scale__control--smaller');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');

const STEP_FOR_SCALE = 25;

const changeScale = (step) => {
  const currentScale = Number(scaleValueElement.value.slice(0, -1));
  const newScale = currentScale + step;
  if (newScale >= 25 && newScale <= 100) {
    scaleValueElement.value = `${newScale}%`;
    imgElement.style.scale = newScale/100;
  }
};


const initScaleEditor = () => {
  zoomInElement.addEventListener('click', () => {
    changeScale(STEP_FOR_SCALE);
  });

  zoomOutElement.addEventListener('click', () => {
    changeScale(-STEP_FOR_SCALE);
  });
};

export {initScaleEditor};


