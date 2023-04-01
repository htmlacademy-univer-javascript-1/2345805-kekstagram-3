import { drawObjects } from './pic-drawer.js';
import {createPicsList} from './data.js';
import './form.js';
import './form-validator.js';
import './scale-editor.js';
import './effect-controller.js';


const NUMBER_OF_PICS = 25;

drawObjects(createPicsList(NUMBER_OF_PICS));


//Задание 7 часть 2
