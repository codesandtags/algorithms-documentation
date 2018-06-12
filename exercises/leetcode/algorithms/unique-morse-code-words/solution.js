const letters = 'abcdefghijklmnopqrstuvwxyz';
const morseCode = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..'];
const mapMorse = new Map(morseCode.map((code, index) => [letters[index], code]));

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const transformations = new Set();
    words.forEach((w) => transformations.add(w.split('').map( l => mapMorse.get(l)).join('')));
    return transformations.size;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);