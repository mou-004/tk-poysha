console.log("add money script loaded");
document.getElementById("add-money-btn").addEventListener("click", function () {

    // 1. Bank name
    const bankName = getValueFromInput("bank-name");
    console.log(bankName);

    // 2. Bank account number
    const accountNumber = getValueFromInput("bank-account");
    console.log(accountNumber);

    // 3. Amount to add
    const amount = Number(getValueFromInput("add-amount"));
    console.log(amount);

    // 4. Current balance (from HTML)
    const currentBalance = getBalance();
    console.log(currentBalance);

    // 5. New balance
    const newBalance = currentBalance + amount;
    console.log(newBalance);

    if (amount <= 0) {
        alert("Invalid amount!");
        return;
    }

    // 6. PIN
    const pin = getValueFromInput("add-pin");
    console.log(pin);

    // 7. PIN match
    if (pin === "1234") {
        setBalance(newBalance);
        saveTransaction("Add Money", amount);
        alert("Add Money successful!");
    } else {
        alert("Wrong PIN!");
    }
});
