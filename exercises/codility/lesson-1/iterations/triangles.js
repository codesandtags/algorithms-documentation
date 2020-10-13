const printTriangle = (rows) => {
    for (let row = 0; row < rows; row++) {
        let output = '';
        for(let asterisk = 0; asterisk <= row; asterisk++) {
            output += '*';
        }
        console.log(output);
    }
};


printTriangle(10);
