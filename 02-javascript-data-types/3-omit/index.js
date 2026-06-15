/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const allObjFields = Object.entries(obj);
  const fieldsToOmit = allObjFields.filter((f) => !fields.includes(f[0]));
  return Object.fromEntries(fieldsToOmit);
};
