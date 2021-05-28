/**
 * 判断是否为数字
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

export default isNumber;
