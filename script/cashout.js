document.getElementById("cashout-btn").addEventListener("click", function () {

    // 1. Agent number
    const agent = getValueFromInput("cashout-number");
    console.log(agent);

    // 2. Cashout amount
    const amount = Number(getValueFromInput("cashout-tk"));
    console.log(amount);

    // 3. Current balance (from HTML)
    const currentBalance = getBalance();
    console.log(currentBalance);

    // 4. New balance
    const newBalance = currentBalance - amount;
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Invalid amount!");
        return;
    }

    // 5. PIN
    const pin = getValueFromInput("cashout-pass");
    console.log(pin);

    // 6. PIN match
    if (pin === "1234") {
        setBalance(newBalance);
         saveTransaction("Cashout", amount);
        alert("Cashout successful!");
    } else {
        alert("Wrong PIN!");
    }
});
