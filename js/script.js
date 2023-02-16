{
    const calculateResult = (currency, amount) => {
        const GBP = 0.19;
        const EUR = 0.21;
        const USD = 0.23;
        switch (currency) {
            case "GBP":
                return amount * GBP;

            case "EUR":
                return amount * EUR;

            case "USD":
                return amount * USD;
        }
    }
    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `Przeliczona kwota to: ${(result.toFixed(2))} ${(currency)}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(currency, amount);

        updateResultText(result, currency);    

    };
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit); 
    };
    init();
}