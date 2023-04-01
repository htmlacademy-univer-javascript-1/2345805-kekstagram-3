const zoomInElement = document.querySelector('.scale__control--bigger');
const zoomOutElement = document.querySelector('.scale__control--smaller');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');


const changeScale = (newScale) => {
  scaleValueElement.value = `${newScale}%`;
  imgElement.style.scale = newScale/100;
};

zoomInElement.addEventListener('click', () => {
  const currentScale = Number(scaleValueElement.value.slice(0, -1));
  if (currentScale !== 100) {
    changeScale(currentScale+25);
  }
});

zoomOutElement.addEventListener('click', () => {
  const currentScale = Number(scaleValueElement.value.slice(0, -1));
  if (currentScale !== 0) {
    changeScale(currentScale-25);
  }
});

