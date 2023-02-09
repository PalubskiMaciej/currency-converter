const currencyElement = document.querySelector(".js-currency");
const amountElement = document.querySelector(".js-amount");
const form = document.querySelector(".js-form");
const resultElement = document.querySelector(".js-result");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const GBP = 0.19;
    const EUR = 0.21;
    const USD = 0.23;

    switch (currency) {
        case "GBP":
            result = amount * GBP;
            break;

        case "EUR":
            result = amount * EUR;
            break;

        case "USD":
            result = amount * USD;
            break;

    }

    resultElement.innerText = `Przeliczona kwota to: ${(result.toFixed(2))} PLN`
})

