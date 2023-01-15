function numberInRange (input){
    let n = Number(input.shift());

    if (n === 0){
        console.log ("No");
    }
    else if ((n >= -100) && (n <=100)){
        console.log ("Yes");
    }else {
        console.log ("No");
    }

}
numberInRange ([
    -200
])