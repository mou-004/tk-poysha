document.getElementById("bill-btn").addEventListener("click", function () {

    const billType = getValueFromInput("bill-type");
    console.log(billType);

    const account = getValueFromInput("bill-account");
    console.log(account);

    const amount = Number(getValueFromInput("bill-amount"));
    console.log(amount);

    const currentBalance = getBalance();
    console.log(currentBalance);

    const newBalance = currentBalance - amount;
    console.log(newBalance);

    if (newBalance < 0) {
        alert("Insufficient Balance!");
        return;
    }

    const pin = getValueFromInput("bill-pin");
    console.log(pin);

    if (pin === "1234") {
        setBalance(newBalance);
         saveTransaction("Pay Bill", amount);
        //addTransaction("Bill Payment", amount);
       
        alert("Bill Paid Successfully!");
    } else {
        alert("Wrong PIN!");
    }
});
