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

    let rate;

    switch (currency) {
        case "GBP":
            rate = GBP;
            break;

        case "EUR":
            rate = EUR;
            break;

        case "USD":
            rate = USD;
            
    }

    const result = amount * rate;

    resultElement.innerText = `Przeliczona kwota to: ${(result.toFixed(2))} ${(currencyElement.value)}`
})

