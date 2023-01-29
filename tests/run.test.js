const { ESLint } = require('eslint');
import { assert, describe, it } from 'vitest';

(async function test() {
  // 1. Create an instance.
  const eslint = new ESLint();

  // 2. Lint files
  const results = await eslint.lintFiles(['./tests/index.js']);

  const errorsCount = results[0].errorCount;
  const warningsCount = results[0].warningCount;

  describe('ESLint Check', () => {
    it('has 11 errors', () => {
      assert.equal(errorsCount, 11);
    });
    it('has 1 warnings', () => {
      assert.equal(warningsCount, 1);
    });
  });
})();
