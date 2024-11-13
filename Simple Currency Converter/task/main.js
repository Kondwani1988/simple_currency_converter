const input = require('sync-input');

const currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
const rates = {
    "USD": 1,
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "GBP": 0.75
};

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    let action = input("> ");

    if (action === "1") {
        console.log("What do you want to convert?");
        let fromCurrency = input("From: > ").toUpperCase();

        if (currencies.indexOf(fromCurrency) === -1) {
            console.log("Unknown currency");
        } else {
            let toCurrency = input("To: > ").toUpperCase();

            if (currencies.indexOf(toCurrency) === -1) {
                console.log("Unknown currency");
            } else {
                let amount = input("Amount: > ");

                if (isNaN(amount)) {
                    console.log("The amount has to be a number");
                } else {
                    amount = Number(amount);

                    if (amount < 1) {
                        console.log("The amount cannot be less than 1");
                    } else {
                        if (fromCurrency === toCurrency) {
                            console.log(`Result: ${amount} ${fromCurrency} equals ${amount.toFixed(4)} ${toCurrency}`);
                        } else {
                            let conversionRate = rates[toCurrency] / rates[fromCurrency];
                            let result = amount * conversionRate;
                            console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`);
                        }
                    }
                }
            }
        }
    } else if (action === "2") {
        console.log("Have a nice day!");
        break;
    } else {
        console.log("Unknown input");
    }
}
