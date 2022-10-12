function solve(input){
    let type = input.shift();
    let result = 0;
    
    if (type === "square") {
        let a = Number(input.shift());
        result = a * a;
 
    } else if (type === "rectangle"){
        let a = Number(input.shift());
        let b = Number(input.shift());
        result = a * b;
 
    } else if (type === "circle"){
        let r = Number(input.shift());
        result = Math.PI * Math.pow(r,2);
 
    } else {
        let a = Number(input.shift());
        let h = Number(input.shift());
        result = a * h / 2;
    }
    console.log(result.toFixed(3));
}