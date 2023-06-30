/* Write a function named guardrail that will accept one argument mathFunction (Function). */

function guardrail(mathFunction) {
  const list = [];

  try {
    const value = mathFunction();
    list.push(value);
  } catch (error) {
    list.push(`Error: ${error.message}`);
  } finally {
    list.push('Guardrail was processed');
  }

  return list;
}

module.exports = guardrail;
