interface MyType {
    [key: string]: string | number;
}
export declare function findArrayDifferences<T>(originalArray: T[], newArray: T[]): {
    removedElements: T[];
    addedElements: T[];
};
export declare function replaceMultipleSubstring(input: string, replacements: MyType): string;
export {};
