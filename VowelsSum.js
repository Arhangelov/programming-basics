function vowelsSum (input){
    let text = input.shift();
    let totalVaowelsSum = 0;

    for (let index =0; index < text.length; index++){
        let character = text[index];

        switch(character){
            case 'a': totalVaowelsSum += 1;
            break;
            case 'e': totalVaowelsSum +=2;
            break;
            case 'i':totalVaowelsSum +=3;
            break;
            case 'o':totalVaowelsSum +=4;
            break;
            case 'u':totalVaowelsSum +=5;
            break;
        }
    } console.log(totalVaowelsSum);
}

vowelsSum([
    "Welcome to Software University!"
])