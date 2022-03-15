import { CHROMATIC_SCALE, NAMING_CONVENTION } from '../consts/index.js';

const noteOutput = document.getElementById('note');
const generateButton = document.getElementById('generate');

function generateNote() {
  const note = getNote();
  noteOutput.innerText = note;
}

function getNote() {
  const currentScale = CHROMATIC_SCALE[NAMING_CONVENTION.EUROPEAN];
  return getRandomIndex(currentScale);
}

function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export const initNoteGenerator = () => generateButton.addEventListener('click', generateNote);