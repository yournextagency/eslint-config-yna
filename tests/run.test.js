const { ESLint } = require('eslint');
import { assert, describe, it } from 'vitest';

(async function test() {
  const eslint = new ESLint();

  const errorResults = await eslint.lintFiles(['./tests/errors/*.js']);
  const warningResults = await eslint.lintFiles(['./tests/warnings/*.js']);

  const expectedErrorCount = errorResults.length;
  const errorsCount = errorResults.reduce((c, res) => c + res.errorCount, 0);

  const expectedWarningsCount = warningResults.length;
  const warningsCount = warningResults.reduce((c, res) => c + res.warningCount, 0);

  describe('ESLint Check', () => {
    it(`has ${expectedErrorCount} errors`, () => {
      assert.equal(errorsCount, expectedErrorCount);
    });
    it(`has ${expectedWarningsCount} warnings`, () => {
      assert.equal(warningsCount, expectedWarningsCount);
    });
  });
})();
