let str = '';

loop1:
for (let i = 0; i < 5; i += 1) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}
