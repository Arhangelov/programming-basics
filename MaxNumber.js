function maxNumber(input) {

    let numberCounter = Number(input.shift());

    let biggerNumber = Number.MIN_SAFE_INTEGER;

    let currentNumber = Number(input.shift());
    let numberPosition = 1;

    while (numberPosition <= numberCounter) {

        if(currentNumber > biggerNumber){
            biggerNumber = currentNumber;
        }

        numberPosition++;
        currentNumber = Number(input.shift());
    }
    console.log(biggerNumber);
}

maxNumber([
    "4",
    "45",
    "-20",
    "7",
    "99"

])