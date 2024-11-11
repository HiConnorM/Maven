// src/lib/utils.ts

/**
 * Combines multiple class names into a single string.
 * Filters out falsy values to prevent adding empty classes.
 * 
 * @param classes - List of class names, potentially including undefined, null, or false values.
 * @returns A single string of combined class names.
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  
  export default cn;
  