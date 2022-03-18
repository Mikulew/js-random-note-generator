import { DEFAULT_OPTIONS, LOCAL_STORAGE_VALUES, SETTINGS_OPTIONS } from '../consts/index.js';
import { checkIsLocaleStored } from '../utils/validation.js';
import { changeConventionScale } from './noteGenerator.js';

const settings = document.getElementById('settings');
const settingsButton = document.getElementById('settingsButton');
const closeButton = document.getElementById('closeButton');
const saveButton = document.getElementById('save');
const namingConventionForm = document.getElementById('convention');
let namingConvetion = checkIsLocaleStored(SETTINGS_OPTIONS.NAMING_CONVENTION)
  ? localStorage.getItem(LOCAL_STORAGE_VALUES[SETTINGS_OPTIONS.NAMING_CONVENTION])
  : DEFAULT_OPTIONS.NAMING_CONVENTION;
console.log('namingConvention', namingConvetion);

const toggleSettings = () => {
  if (settings.classList.contains('hide')) {
    settings.classList.remove('hide');
  } else {
    settings.classList.add('hide');
  }
};

export const initSettings = () => settingsButton.addEventListener('click', () => toggleSettings());

closeButton.addEventListener('click', () => settings.classList.add('hide'));

namingConventionForm.value = namingConvetion;
namingConventionForm.addEventListener('click', (e) => namingConvetion = e.target.value);

saveButton.addEventListener('click', () => {
  localStorage.setItem(LOCAL_STORAGE_VALUES[SETTINGS_OPTIONS.NAMING_CONVENTION], namingConvetion)
  settings.classList.add('hide');
  changeConventionScale(namingConvetion);
});

export default toggleSettings;