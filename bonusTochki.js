function bonusTochki (input){
    let score = Number(input.shift());
    let bonus = 0;

    if (score <= 100){
        bonus = 5;
    } else if (score > 1000){
        bonus = score * 0.10;
    }else if (score > 100) {
        bonus = score * 0.20;
    }
    
    if (score % 2 === 0){
        bonus += 1;
    }else if (score % 10 === 5){
        bonus +=2;
    }

    console.log (bonus);
    console.log (score + bonus);
}

bonusTochki ([
    2703
])