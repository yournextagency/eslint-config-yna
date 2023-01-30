function foo() {
  const object = { a: 1, b: 2, c: 3 };

  for (const property in object) {
    return `${property}: ${object[property]}`;
  }
}

foo();
