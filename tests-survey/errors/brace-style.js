const bar = () => {};
const baz = () => {};

((foo) => {
  if (foo) {
    bar();
  }
  else {
    baz();
  }
})();
