function numberSequence (input){

    let numbersCount = Number(input.shift());

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let number =0; number < numbersCount; number++){
        let currentNumber = Number(input.shift());

        if(currentNumber > maxNumber){
            maxNumber = currentNumber;
        }
        if(currentNumber < minNumber){
            minNumber = currentNumber;
        }
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}