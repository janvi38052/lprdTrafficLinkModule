"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArrayDifferences = findArrayDifferences;
exports.replaceMultipleSubstring = replaceMultipleSubstring;
function findArrayDifferences(originalArray, newArray) {
    const removedElements = originalArray.filter(item => !newArray.includes(item));
    const addedElements = newArray.filter(item => !originalArray.includes(item));
    return { removedElements, addedElements };
}
function replaceMultipleSubstring(input, replacements) {
    let result = input;
    for (const [key, value] of Object.entries(replacements)) {
        result = result.split(key).join(String(value));
    }
    return result;
}
//# sourceMappingURL=utils.js.map