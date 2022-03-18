import { LOCAL_STORAGE_VALUES } from '../consts/index.js';

export const checkIsLocaleStored = (name) => (localStorage.getItem(LOCAL_STORAGE_VALUES[name]) !== null);
