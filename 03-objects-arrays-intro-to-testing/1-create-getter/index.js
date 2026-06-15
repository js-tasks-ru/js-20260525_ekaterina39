/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  if (!path) return;
  const keys = path.split(".");
  return function (obj) {
    if (isEmpty(obj)) return;
    let result = obj;
    for (const key of keys) {
      result = result[key];
    }
    return result;
  };
}

function isEmpty(object) {
  return object == null || Object.keys(object).length === 0;
}
