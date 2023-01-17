function oddEvenSum(input) {
    let n = Number(input.shift());
 
    let evenSum = 0;
    let oddSum = 0;
 
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
 
        if (i % 2 == 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }
    if (evenSum == oddSum) {
        console.log("Yes");
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log("No");
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}