/**
 * 过滤
 * @param str
 * @returns {*}
 */
function pureCode(str) {
  return str.split('\n').map(item => item.trimStart().trimEnd()).filter(item => item && item.indexOf('*') === -1).join('');
}

/**
 * 计算体积
 * @param strA
 * @param strB
 * @returns {string}
 */
function countVolume(strA = '', strB = '') {
  const strPureA = pureCode(strA);
  const strPureB = pureCode(strB);

  if(!strPureA){
    return 0;
  }
  return parseFloat((strPureA.length - strPureB.length) * 100 / strPureA.length).toFixed(1);
}

export default countVolume;
