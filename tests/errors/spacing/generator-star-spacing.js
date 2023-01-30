function * foo() {
  // ...
}

// bad too
// const bar1 = function * () {};

// good
function* bar() {
  // ...
}

// also good
const baz = function* () {
  // ...
};

foo();
bar();
baz();
