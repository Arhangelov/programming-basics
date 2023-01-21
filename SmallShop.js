function smallShop (input){
    let product = input.shift();
    let town = input.shift();
    let quantity = Number(input.shift());
    let result = 0;

   switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee": result = quantity * 0.50; break;
                case "water": result = quantity * 0.80; break;
                case "beer": result = quantity * 1.20; break;
                case "sweets": result = quantity * 1.45; break;
                case "peanuts": result = quantity * 1.60; break;
            }break;
        case "Plovdiv":
            switch (product){
                case "coffee": result = quantity * 0.40; break;
                case "water": result = quantity * 0.70; break;
                case "beer": result = quantity * 1.15; break;
                case "sweets": result = quantity * 1.30; break;
                case "peanuts": result = quantity * 1.50; break;    
            }break;
        case "Varna": 
            if (product === "coffee"){
                result = quantity * 0.45;
            }else if (product === "water"){
                result = quantity * 0.70;
            }else if (product === "beer"){
                result = quantity * 1.10;
            }else if (product === "sweets"){
                result = quantity * 1.35;
            }else{
                result = quantity * 1.55;
            }break;
    
   
       
   }
   console.log (result);
}