function sumNumbers (input){
    let end = Number(input.shift());
    let sum = 0;

    for(let n=0; n < end; n++){  
        let currentNumber =  Number(input.shift());

        if (!isNaN(currentNumber)){
        sum += currentNumber;
        }
    }
console.log(sum)

}

sumNumbers([
    "5",
    "50",
    "150",
    "30",
    "20",
    "55.5"
])