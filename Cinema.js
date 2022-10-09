function cinema (input){
    let type = input.shift();
    let r = Number(input.shift());
    let c = Number(input.shift());

    let income = 0;

    if (type === "Premiere"){
        income = (r * c)*12.00;
    } else if ( type === "Normal"){
        income = (r*c)*7.50;
    } else if ( type === "Discount"){
        income = (r*c)*5.00;
    }
    console.log (`${income.toFixed(2)} leva`);
} 

cinema ([
    "Normal",
    21,
    13
     
])