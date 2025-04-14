/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const params = {};
    return function(...args) {
        const param = args.toString();
        if(!params.hasOwnProperty(param)) {
            params[param] = fn(...args);
        }
        return params[param];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */