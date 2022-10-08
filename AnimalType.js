function animalType (input){
    let animal = input.shift();

    switch (animal){
    case "dog": console.log("mammal");
    break;
    case "crocodile": 
    case "tortoise":
    case "snake": console.log ("reptile");
    break;
    case "cat": console.log ("unknown");
    break;
}
}