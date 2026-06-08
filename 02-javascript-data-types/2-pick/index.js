/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const allObjFields = Object.entries(obj);
  const fieldsToPick = allObjFields.filter((f) => fields.includes(f[0]));
  return Object.fromEntries(fieldsToPick);
};
