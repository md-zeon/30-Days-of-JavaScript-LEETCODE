/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i+=size) {
        res.push(arr.slice(i, size+i));
    }
    return res;
};
