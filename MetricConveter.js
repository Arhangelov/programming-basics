function metricConverter (input){
    let num = Number(input.shift());
    let unit = input.shift();
    let outUnit = input.shift();

    let numConverted = 0;

    if (unit === 'mm') {
        if (outUnit === 'm') {
             numConverted = num / 1000;
        } else {
             numConverted = num / 10;
        }
    }

    if (unit === 'cm') {
        if (outUnit === "mm") {
             numConverted = num *10;
        } else {
             numConverted = num / 100;
        }

    }

    if (unit === 'm') {
        if (outUnit === 'cm') {
             numConverted = num * 100;
        } else {
             numConverted = num * 1000;
        }

    } 
    console.log (numConverted.toFixed(3));
}

metricConverter ([
    12,
    "mm",
    "m"

])