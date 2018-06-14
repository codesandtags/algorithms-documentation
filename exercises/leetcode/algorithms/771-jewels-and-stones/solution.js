/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    J.split('').forEach((jewel) => {
        count += S.split('').filter(s => s === jewel).length;
    });

    return count;
};

// Short solution:
// var numJewelsInStones = (J, S) => S.split('').filter(s => J.includes(s)).length

// Short solution:
// var numJewelsInStones = (J, S) => S.split('').filter(i => J.indexOf(i) != -1)).length;