function password (input){

let userName = input.shift();
let password = input.shift();

let currentPassword = input.shift();

while (password !== currentPassword){
    currentPassword = input.shift();

}

console.log(`Welcome ${userName}`);

}
password ([
    'Nakov',
    '1234',
    'pass',
    '1324',
    '1234'
])