function characterSequence (input){
    let text = input.shift();
    for(let char = 0; char < text.length; char++){

        console.log(text[char]);
    }
}

characterSequence([
    "Software University"
])