function fruidShop (input){
    let product = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());
    let result = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        switch (product){
            case "banana": result = quantity * 2.50; break;
            case "apple": result = quantity * 1.20; break;
            case "orange": result = quantity * 0.85; break;
            case "grapefruit": result = quantity * 1.45; break;
            case "kiwi": result = quantity * 2.70; break;
            case "pineapple": result = quantity * 5.50; break;
            case "grapes": result = quantity * 3.85; break;
            console.log (`${result.toFixed(2)}`);
            default: console.log("error");
        }
    }
    
}

fruidShop ([
    "apple",
    "Tuesday",
    2
    
])