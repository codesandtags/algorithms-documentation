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

function birthdayCakeCandles(n, ar) {
    let tallestCandles = 0;
    let tallestCandle = '';
    let candlesBySize = {};

    for (candle of ar) {
        candlesBySize[candle] = candlesBySize[candle]+1 || 1;
    }

    for (candle in candlesBySize) {
        if(candlesBySize[candle] > tallestCandles) {
            tallestCandles = candlesBySize[candle];
            tallestCandle = candle;
        }
    }

    return tallestCandles;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    ar.sort();
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
