export function saveState(state, key) {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem(key, stringifiedState);
}

export function loadState(key) {
  const stringifiedState = localStorage.getItem(key);
  return JSON.parse(stringifiedState);
}
