/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0) return init;
    let val = init;
    for (const num of nums) {
        val = fn(val, num);
    }
    return val;
};


// Example 1: Sum all the numbers in the array
const nums1 = [1, 2, 3, 4];
const sumFn = (acc, num) => acc + num;
console.log(reduce(nums1, sumFn, 0)); // Output: 10

// Example 2: Find the product of all the numbers
const nums2 = [1, 2, 3, 4];
const productFn = (acc, num) => acc * num;
console.log(reduce(nums2, productFn, 1)); // Output: 24

// Example 3: If the array is empty, return the initial value
const nums3 = [];
const sumEmptyArray = (acc, num) => acc + num;
console.log(reduce(nums3, sumEmptyArray, 0)); // Output: 0

// Example 4: Concatenate strings in an array
const strs = ['Hello', ' ', 'World', '!'];
const concatFn = (acc, str) => acc + str;
console.log(reduce(strs, concatFn, '')); // Output: "Hello World!"
