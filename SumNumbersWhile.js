function sumNumbers (input){

    let sum = 0;
    let inputText = input.shift();

    while (inputText !== 'Stop'){

        let number = Number(inputText);

        sum += number;

        inputText = input.shift();
    }
    console.log (sum);

}

sumNumbers ([
    '10',
    '20',
    '30',
    '45',
    Stop
    ])