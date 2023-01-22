function secondsToMinutes (input){
    let begach1 = Number(input.shift());
    let begach2 = Number(input.shift());
    let begach3 = Number(input.shift());

    let obshtoVreme = begach1 + begach2 + begach3;

    let minuti = Math.floor(obshtoVreme / 60);
    let sekundi = obshtoVreme % 60;

    if (sekundi < 10){
    console.log (`${minuti}:0${sekundi}`);
} else if (sekundi >= 10){
    console.log (`${minuti}:${sekundi}`);
}
}

secondsToMinutes([
    22,
    7,
    34


])