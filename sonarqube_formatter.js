module.exports = function (results) {
  const summary = { issues: [] };
  results.forEach(function (result) {
    result.messages.forEach(function (msg) {
      const logMessage = {
        engineId: 'eslint',
        ruleId: msg.ruleId,
        primaryLocation: {
          message: msg.message,
          filePath: result.filePath,
          textRange: {
            startLine: msg.line,
            endLine: msg.endLine,
            endColumn: msg.endColumn,
          },
        },
      };

      if (msg.severity === 1) {
        logMessage.type = 'CODE_SMELL';
        logMessage.severity = 'INFO';
        logMessage.tag = 'ESLINT';
      }
      if (msg.severity === 2) {
        logMessage.type = 'BUG';
        logMessage.severity = 'MAJOR';
        logMessage.tag = 'ESLINT';
      }
      summary.issues.push(logMessage);
    });
  });
  return JSON.stringify(summary);
};
