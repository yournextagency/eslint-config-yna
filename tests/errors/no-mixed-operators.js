const a = true;
const b = true;
const c = 1;
const d = 2;

(() => {
  if (a || b && c) {
    return d;
  }
})();
