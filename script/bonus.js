document.getElementById("bonus-btn").addEventListener("click", function () {

    const code = getValueFromInput("bonus-code");
    console.log(code);

    let bonus = 0;

    if (code === "BONUS50") bonus = 50;
    else if (code === "BONUS100") bonus = 100;
    else {
        alert("Invalid Coupon!");
        return;
    }

    const currentBalance = getBalance();
    console.log(currentBalance);

    const newBalance = currentBalance + bonus;
    console.log(newBalance);
    saveTransaction("Bonus", bonus);

    setBalance(newBalance);
    addTransaction("Bonus", bonus);

    alert("Bonus Added!");
});
