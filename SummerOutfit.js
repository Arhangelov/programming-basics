function summerOutfit(input) {
    let temperature = Number(input.shift());
    let dayType = input.shift();
    let outfit;
    let shoes;

    if (temperature >= 10 && temperature <= 18){
        if (dayType === "Morning") {
            outfit = "Sweatshirt";
            shoes ="Sneakers";
        } else if (dayType === "Afternoon"){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayType === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (temperature > 18 && temperature <= 24){
        if (dayType === "Morning"){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (dayType === "Afternoon"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayType === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (temperature >= 25){
        if (dayType === "Morning"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (dayType === "Afternoon"){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (dayType === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
       
    }
    console.log (`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit ([
    16,
    "Morning"
])