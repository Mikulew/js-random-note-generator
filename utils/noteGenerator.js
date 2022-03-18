import { CHROMATIC_SCALE, SETTINGS_OPTIONS, LOCAL_STORAGE_VALUES, DEFAULT_OPTIONS } from '../consts/index.js';
import { checkIsLocaleStored } from '../utils/validation.js';

const noteOutput = document.getElementById('note');
const generateButton = document.getElementById('generate');
let namingConvention = checkIsLocaleStored(SETTINGS_OPTIONS.NAMING_CONVENTION)
  ? localStorage.getItem(LOCAL_STORAGE_VALUES[SETTINGS_OPTIONS.NAMING_CONVENTION])
  : DEFAULT_OPTIONS.NAMING_CONVENTION;
let index = null;

function generateNote() {
  const note = getRandomNote();
  noteOutput.innerText = note;
}

function getRandomNote() {
  const currentScale = CHROMATIC_SCALE[namingConvention];
  return getRandomIndex(currentScale);
}

function getRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  index = randomIndex;
  return array[randomIndex];
}

export const initNoteGenerator = () => generateButton.addEventListener('click', generateNote);

export const changeConventionScale = (convention) => {
  noteOutput.innerText = CHROMATIC_SCALE[convention][index] ?? '---';
}