process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    const s = readLine();
    const camelCaseCount = s
        .replace(/([A-Z])/g, ' $1') // insert a space before all caps
        .split(' ').length // counts how many words there are
    console.log(camelCaseCount);
}
