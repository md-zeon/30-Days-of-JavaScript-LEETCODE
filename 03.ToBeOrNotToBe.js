/**
 * @param {any} val - The value to be tested
 * @return {object} - An object with toBe and notToBe methods
 */
var expect = function(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
                return true; // Values are strictly equal
            }
            throw new Error("Not Equal"); // Throw error if not equal
        },
        notToBe: function(expectedVal) {
            if (val !== expectedVal) {
                return true; // Values are not strictly equal
            }
            throw new Error("Equal"); // Throw error if equal
        }
    };
};

// Example Usage:

// Test case 1:
try {
    console.log(expect(5).toBe(5)); // Output: true
} catch (error) {
    console.error(error.message); // No error here
}

// Test case 2:
try {
    console.log(expect(5).toBe(null)); // Throws Error: "Not Equal"
} catch (error) {
    console.error(error.message); // Output: "Not Equal"
}

// Test case 3:
try {
    console.log(expect(5).notToBe(null)); // Output: true
} catch (error) {
    console.error(error.message); // No error here
}

// Test case 4:
try {
    console.log(expect(5).notToBe(5)); // Throws Error: "Equal"
} catch (error) {
    console.error(error.message); // Output: "Equal"
}
