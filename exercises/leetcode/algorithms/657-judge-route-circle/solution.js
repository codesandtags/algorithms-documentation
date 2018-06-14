/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let count = 0;
    moves.split('').forEach( m => {
        switch (m) {
            case 'U':
            case 'R': count++; break;
            case 'D':
            case 'L': count--; break;
        }
    });

    return count === 0;
};

judgeCircle('UD');