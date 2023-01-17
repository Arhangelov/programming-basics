function pipesInPool (input){
    let v = Number(input.shift());
    let p1 = Number(input.shift());
    let p2 = Number(input.shift());
    let h = Number(input.shift());

    //Presmqtane na litri voda prez sistemata
    let pipe1 = h * p1;
    let pipe2 = h * p2;
    let obshtoLitri = pipe1 + pipe2

    //Presmqtane na procenti
    let obshtoLitriProcent = obshtoLitri / v * 100;
    let pipe1Procent = pipe1 / obshtoLitri * 100;
    let pipe2Procent = pipe2 / obshtoLitri * 100;

    //Presmqtane na prelivane
    let prelivane = obshtoLitri - v;

    //Usloviq
    if (obshtoLitri < v){
        console.log(`The pool is ${obshtoLitriProcent.toFixed(2)}%. Pipe 1: ${pipe1Procent.toFixed(2)}%. Pipe 2: ${pipe2Procent.toFixed(2)}%. `)
    }else if(obshtoLitri >= v){
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${prelivane.toFixed(2)} liters.`)
    }
}

pipesInPool([
    100,
    100,
    100,
    2.5
    

])