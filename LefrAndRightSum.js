function leftAndRightSum (input){
    let n = Number(input.shift());
    let leftSum =0;
    let rightSum = 0;

    for (let i = 0; i < n*2; i++){
        let number = Number(input.shift());

        if(i < n){
            leftSum += number;
        }else {
            rightSum += number;
        }
    }
    if (rightSum == leftSum){
        console.log (`Yes, sum = ${leftSum}`);
    }else {
        console.log (`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}