function main() {
    const a = readLine();
    const b = readLine();
    console.log(getRemovedCharactersInAnagram(a, b));
}

function getRemovedCharactersInAnagram(a, b) {
    const frecuency = new Array(26).fill(0); // Number of letters in alphabet
    let numbersNeeded = 0;
    const charCodeA = 'a'.charCodeAt(0); // 97

    // Frecuency in first word
    for(let i = 0; i < a.length; i++){
        let letter = a.charCodeAt(i);
        frecuency[letter - charCodeA]++;  //Increment the frecuency[x]
    }

    // Frecuency in second word
    for(let i = 0; i < b.length; i++){
        let letter = b.charCodeAt(i);
        frecuency[letter - charCodeA]--;  //Decrement the frecuency[x]
    }

    // Balance the total of characters deleted
    for(let i = 0; i < frecuency.length; i++){
        numbersNeeded += Math.abs(frecuency[i]);
    }

    return numbersNeeded;
}