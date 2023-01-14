function maxNumber(input) {

    let numberCounter = Number(input.shift());

    let smallerNumber = Number.MAX_SAFE_INTEGER;

    let currentNumber = Number(input.shift());
    let numberPosition = 1;

    while (numberPosition <= numberCounter) {

        if(currentNumber < smallerNumber){
            smallerNumber = currentNumber;
        }

        numberPosition++;
        currentNumber = Number(input.shift());
    }
    console.log(smallerNumber);
}
