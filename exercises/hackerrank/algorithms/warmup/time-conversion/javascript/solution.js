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

function timeConversion(s) {
    const hourChunks = s.split(':');
    const formatHour = s.substr(s.length - 2, s.length)
    hourChunks[2] = hourChunks[2].substr(0, hourChunks[2].length - 2);

    if(formatHour === 'PM' && parseInt(hourChunks[0]) !== 12) {
        hourChunks[0] = parseInt(hourChunks[0]) + 12;
    } else if( parseInt(hourChunks[0]) === 12 && formatHour === 'AM') {
        hourChunks[0] = '00';
    }

    return hourChunks[0] + ':' + hourChunks[1] + ':' + hourChunks[2];
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
