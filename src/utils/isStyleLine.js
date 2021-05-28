/**
 * 判断是否是样式处在的行
 * @param line
 * @returns {boolean}
 */
const isStyleLine = (line) => {
  if (line.indexOf('\/') > -1) {
    return false;
  }
  if (line.indexOf('\\') > -1) {
    return false;
  }
  if (line.indexOf('@') > -1) {
    return false;
  }
  if (line.indexOf('$') > -1) {
    return false;
  }
  return line.indexOf(':') > -1;
};

export default isStyleLine;
