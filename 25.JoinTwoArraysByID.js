/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

// Time complexity (n * m)
var join = function(arr1, arr2) {
    const joinedArray = [...arr1];
    for (let obj of arr2) {
        let unique = true;
        for (let i = 0; i < joinedArray.length; i++) {
            if (obj.id === joinedArray[i].id) {
                unique = false;
                for (let key in obj) {
                    joinedArray[i][key] = obj[key];
                }
            }
        }
        if (unique) joinedArray.push(obj);
    }

    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// Time complexity: O(n + m + k log k) (where k is the number of unique IDs)
var join = function(arr1, arr2) {
    const map = {};

    // Add all elements from arr1
    for (const obj of arr1) {
        map[obj.id] = { ...obj };
    }

    // Merge or add from arr2
    for (const obj of arr2) {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };  // arr2 overwrites arr1
        } else {
            map[obj.id] = { ...obj };
        }
    }

    // Convert map to array and sort by id
    return Object.values(map).sort((a, b) => a.id - b.id);
};
