const TODOS_STORAGE_KEY = "song";
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set(songNew) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(songNew));
  },
};
