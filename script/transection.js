function loadTransactions() {
    const list = document.getElementById("transaction-list");
    if (!list) return;

    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    list.innerHTML = "";

    if (transactions.length === 0) {
        list.innerHTML = `<p class="text-center text-gray-500">No transactions yet</p>`;
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

window.loadTransactions = loadTransactions;