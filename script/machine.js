console.log("machine added");
function saveTransaction(type, amount) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.push({
        type: type,
        amount: Number(amount),
        time: new Date().toLocaleString()
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions() {
    const list = document.getElementById("transaction-list");
    if (!list) return;

    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    list.innerHTML = "";

    if (transactions.length === 0) {
        list.innerHTML = `<p class="text-gray-500 text-center">No transactions yet</p>`;
        return;
    }

    transactions.slice().reverse().forEach(tx => {
        const div = document.createElement("div");
        div.className = "card bg-base-200 p-3 shadow";

        div.innerHTML = `
            <div class="flex justify-between">
                <div>
                    <p class="font-bold">${tx.type}</p>
                    <p class="text-sm text-gray-500">${tx.time}</p>
                </div>
                <p class="font-bold">৳ ${tx.amount}</p>
            </div>
        `;

        list.appendChild(div);
    });
}

/* 👇 THIS IS CRITICAL */
window.saveTransaction = saveTransaction;
window.loadTransactions = loadTransactions;

// get value from input
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// get balance from HTML
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = Number(balanceElement.innerText);
    console.log("Current Balance:", balance);
    return balance;
}

// set balance in HTML
function setBalance(newBalance) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = newBalance;
    console.log("New Balance:", newBalance);
}
//machine id >hide all >show machine id
 /*function showMachine(id) {

    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transfer = document.getElementById("transfer");
    const bonus = document.getElementById("bonus");
    const paybill = document.getElementById("paybill");
    const transactions = document.getElementById("transactions");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    bonus.classList.add("hidden");
    paybill.classList.add("hidden");
    transactions.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
    
}
*/
function showMachine(id) {

    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transfer = document.getElementById("transfer");
    const bonus = document.getElementById("bonus");
    const paybill = document.getElementById("paybill");
    const transactions = document.getElementById("transactions");

    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transfer.classList.add("hidden");
    bonus.classList.add("hidden");
    paybill.classList.add("hidden");
    transactions.classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
     if (id === "transactions") {
    loadTransactions();
}
}
