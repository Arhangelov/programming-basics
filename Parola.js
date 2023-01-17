function guesPassword (input){
    let pass = input.shift();

    if (pass === "s3cr3t!P@ssw0rd"){
    console.log("Welcome");
}else{
    console.log("Wrong password!");
}
}

guesPassword([
    "s3cr3t!P@ssw0d"
])