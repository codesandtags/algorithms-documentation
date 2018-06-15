// Complete the rotLeft function below.
function rotLeft(array, rotations) {
    for(let i=0; i < rotations; i++) {
        // Remove the first element and put it in the final slot.
        // This simulates the let rotation
        array.push(array.shift());
    }

    return array;
}
