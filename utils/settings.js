const settings = document.getElementById('settings');
const settingsButton = document.getElementById('settingsButton');
const closeButton = document.getElementById('closeButton');
const saveButton = document.getElementById('save');

const toggleSettings = () => {
  if (settings.classList.contains('hide')) {
    settings.classList.remove('hide');
  } else {
    settings.classList.add('hide');
  }
};

export const initSettings = () => settingsButton.addEventListener('click', () => toggleSettings());

closeButton.addEventListener('click', () => settings.classList.add('hide'));

saveButton.addEventListener('click', () => console.log('save'));

export default toggleSettings;