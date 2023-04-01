const effectsItemList = document.querySelector('.effects__list');
const imgElement = document.querySelector('.img-upload__preview');
const effectLevelSlider = document.querySelector('.effect-level__slider');
//const effectLevelValue = document.querySelector('.effect-level__value');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

// const effects = [
//   grayscale = {
//     min: 0,
//     max: 1,
//     step: 0.1
//   },
//   sepia = {
//     min: 0,
//     max: 1,
//     step: 0.1
//   },
//   invert = {
//     min: 0,
//     max: 100,
//     step: 1
//   },
//   blur = {
//     min: 0,
//     max: 3,
//     step: 0.1
//   },
//   brightness = {
//     min: 1,
//     max: 3,
//     step: 0.1
//   },
// ];

effectsItemList.addEventListener('change', (evt) => {
  const currentEffect = evt.target.value;
  for (const className of imgElement.classList) {
    if (className.startsWith('effects__preview--')) {
      imgElement.classList.remove(className);
    }
  }
  imgElement.classList.add(`effects__preview--${currentEffect}`);
  // if (currentEffect !== 'none') {
  //   effectLevelSlider.noUiSlider.updateOptions({
  //     range: {
  //       min: effects[currentEffect].min,
  //       max: effects[currentEffect].max,
  //     },
  //     step: effects[currentEffect].step,
  //   });
  //   imgElement.style.filter = `${currentEffect}(${effects[currentEffect].max})`;
  // } else {
  //   imgElement.style.filter = '';
  // }
});

// effectLevelSlider.noUiSlider.on('update', () => {
//   const currentEffect = effectsItemList.querySelector('input[name="effect"]:checked').value;
//   if (currentEffect !== 'none') {
//     imgElement.style.filter = `${currentEffect}(${effectLevelSlider.noUiSlider.get()})`;
//   }
// });
