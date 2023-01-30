import { assert, describe, it } from 'vitest';

const { ESLint } = require('eslint');

(async function test() {
  const eslint = new ESLint();

  const errorResults = await eslint.lintFiles(['./tests/errors/**/*.js']);
  const warningResults = await eslint.lintFiles(['./tests/warnings/**/*.js']);

  const expectedErrorCount = errorResults.length;
  const errorsCount = errorResults.reduce((c, res) => {
    // find and avoid error duplicates in one file
    const uniqueErrors = [];
    res.messages.forEach((message) => {
      if (!uniqueErrors.includes(message.ruleId)) {
        uniqueErrors.push(message.ruleId);
      }
    });
    const duplicates = res.messages.length - uniqueErrors.length;

    return c + res.errorCount - duplicates;
  }, 0);

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
