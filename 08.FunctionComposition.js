/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let res = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            res = functions[i](res);
        }
        return res;
    }

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */


const fn1 = compose([x => x + 1, x => x * 2]); 
console.log(fn1(4)); // Output: 9 => (4 * 2) + 1

const fn2 = compose([x => x - 1, x => x * x, x => 2 * x]);
console.log(fn2(3)); // Output: 35 => 2*3=6, 6*6=36, 36-1=35

const fn3 = compose([]);
console.log(fn3(42)); // Output: 42 (no functions to apply)
