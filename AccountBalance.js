function accountBalance(input) {
    let n = Number(input.shift());
    let totalAmount = 0;

    let currentAmount = 1;
    let text = input.shift();

    while (currentAmount <= n) {

        let amount = Number (text);

            if(amount < 0) {
                console.log(`Invalid operation!`);
                break;
            }

        totalAmount += amount;

        console.log(`Increase: ${amount.toFixed(2)}`);

        currentAmount++;
        text = input.shift();

    }
    console.log(`Total: ${totalAmount.toFixed(2)}`)

}

accountBalance([
    "5",
    "120",
    "45.55",
    "-150"


])