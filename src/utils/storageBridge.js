// Tiny storage bridge for cross-page handoff (one-shot consumption)

const safeGet = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};

const safeRemove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch {}
};

export const setOneShot = (key, value) => safeSet(key, value);

export const consumeOneShot = (key) => {
  const val = safeGet(key);
  if (val !== null) safeRemove(key);
  return val;
};

// Specific helpers for ToggleBox
const TRANSFER_KEY = 'togglebox_transfer';
const THEME_BASE_KEY = 'togglebox_theme_color';

export const setTransferButton = (variant, color) => {
  const payload = JSON.stringify({ type: 'button', target: variant, color });
  return setOneShot(TRANSFER_KEY, payload);
};

export const consumeTransferButton = () => {
  const raw = consumeOneShot(TRANSFER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setPickerThemeColor = (hexColor) => setOneShot(THEME_BASE_KEY, hexColor);

export const consumePickerThemeColor = () => consumeOneShot(THEME_BASE_KEY);


