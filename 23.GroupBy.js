/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const grouped = {};
    for (let i = 0; i < this.length; i++) {
        const currentKey = fn(this[i]);
        if (grouped[currentKey]) {
            grouped[currentKey].push(this[i]);
        } else {
            grouped[currentKey] = [this[i]];
        }
    }

    return grouped;
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */