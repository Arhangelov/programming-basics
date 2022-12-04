function halfSumElements (input) {
    
    let n = Number(input.shift());

    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i =0; i < n; i++) {
        let currentNumber = Number(input.shift());
        sum += currentNumber;

        if (currentNumber > maxNum) {
            
            maxNum = currentNumber;
        }
    }

    let result = sum - maxNum;

    if (result === maxNum) {

        console.log ("Yes");
        console.log (`Sum = ${result}`)
    }else {
        console.log ('No');
        console.log (`Diff = ${Math.abs(maxNum - result)}`)
    }
}