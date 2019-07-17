module.exports = {
  calculator: async function (num1, num2, operator, callback) {
    try {
      num2 = +num2;
      let result;
      if (operator === '+') {
        result = num1 + num2;
      }
      else if (operator === '-') {
        result = num1 - num2;
      }
      else if (operator === '*') {
        result = num1 * num2;
      }
      else if (operator === '%') {
        if (!num2) {
          throw new Error('Invalid dividend ' + num2);
        }
        result = num1 / num2;
      }else{
          throw new Error('Invalid Operator ' + operator);
      }
      callback(null, result, 'success')
    } catch (err) {
      return callback(err, '', err.message);
    }
  },
}
