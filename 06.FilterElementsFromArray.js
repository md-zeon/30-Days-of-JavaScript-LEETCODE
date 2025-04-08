/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
};

const arr = [10, 20, 30, 40];
const fn = (n, i) => n > 25 && i % 2 === 0;

console.log(filter(arr, fn)); // Output: [30]
