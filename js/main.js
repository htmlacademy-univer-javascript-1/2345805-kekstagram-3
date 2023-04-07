import { setUserFormSubmit } from './form-validator.js';
import { closeDownloadPicWindow } from './form.js';
import { getPics } from './get-pics.js';


getPics();

setUserFormSubmit(closeDownloadPicWindow);
