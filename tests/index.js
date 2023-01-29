(() => {
  // prefer-const error
  let a = 1;

  return a;
});

(() => {
  // no-unused-vars error
  const foo = 'bar';
});

// semi error
(() => {})

// quotes error
"";

// no-trailing-spaces error 

// eqeqeq error
(() => 'foo' == 'bar');

// comma-dangle error
[
  1
];

// indent error
[
    1,
];

// max-len error
'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

// object-curly-spacing error
(() => ({ 'foo': 'bar'}));

// no-console warning
console.log('foo');

// eol-last error