/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  return [...arr].sort((a, b) => {
    const cmp = a.trim().localeCompare(b.trim(), ["ru", "en"], {
      sensitivity: "case",
      caseFirst: "upper",
    });
    return param === "desc" ? -cmp : cmp;
  });
}
