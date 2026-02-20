document.getElementById("transfer-btn").addEventListener("click", function () {

    const account = getValueFromInput("transfer-account");
    console.log(account);

    const amount = Number(getValueFromInput("transfer-amount"));
    console.log(amount);

    const currentBalance = getBalance();
    console.log(currentBalance);

    const newBalance = currentBalance - amount;
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Insufficient Balance!");
        return;
    }

    const pin = getValueFromInput("transfer-pin");
    console.log(pin);

    if (pin === "1234") {
        setBalance(newBalance);
       // addTransaction("Transfer", amount);
        saveTransaction("Transfer", amount);
        alert("Transfer Successful!");
    } else {
        alert("Wrong PIN!");
    }
});
