// src/utils/utils.ts

// Define the interface allowing both string and number as values
interface MyType {
    [key: string]: string | number;
  }
  export function findArrayDifferences<T>(originalArray: T[], newArray: T[]) {
    const removedElements = originalArray.filter(item => !newArray.includes(item));
    const addedElements = newArray.filter(item => !originalArray.includes(item));
    return { removedElements, addedElements };
  }
  
  // Modify the function to use the new type for replacements
  export function replaceMultipleSubstring(input: string, replacements: MyType): string {
    let result = input;
    // Loop through each key-value pair in replacements
    for (const [key, value] of Object.entries(replacements)) {
      // Ensure the value is treated as a string before using it in the replace operation
      result = result.split(key).join(String(value)); 
    }
    return result;
  }
  