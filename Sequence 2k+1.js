function sequence(input) {

    let n = Number(input.shift());

    let number = 1;

    while (number <= n) {

        console.log(number);
        number = (number * 2) + 1;
    }
}

sequence([
    '3'
])