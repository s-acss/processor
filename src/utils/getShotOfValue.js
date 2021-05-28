import isNumber from "./isNumber";

/**
 * 获取值的缩写
 * @param value
 * @returns {string}
 */
function getShotOfValue(value = '') {

  let result = '';
  value.trimStart().trimEnd();

  if (value.indexOf('(') > -1) {
    return '';
  }

  // 带 # 号替换为 _;
  if (value.indexOf('#') > -1) {
    return value.replace(/\#/g, '_').replace(/\;/g, '').toLowerCase();
  }

  if (value.indexOf('%') > -1) {
    return value.replace(/\;/g, '');
  }

  const numValue = parseFloat(value);
  if (isNumber(numValue)) {
    return String(numValue);
  }

  return result;
};

export default getShotOfValue;
