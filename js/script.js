{
  const updateResultText = (inputCurrency, outputCurrency, resultElement, result) => {
    resultElement.innerText = inputCurrency === outputCurrency
      ? `Wybierz różne waluty`
      : `Po przeliczeniu wyszło: ${(result.toFixed(2))} ${(outputCurrency)}`;
  };

  const calculateResult = (inputCurrency, outputCurrency, amount) => {
    switch (inputCurrency) {
      case "PLN":
        switch (outputCurrency) {
          case "EUR":
            return amount * 0.22;
          case "GBP":
            return amount * 0.19;
          case "USD":
            return amount * 0.24;
        };
      case "EUR":
        switch (outputCurrency) {
          case "PLN":
            return amount * 4.47;
          case "GBP":
            return amount * 0.86;
          case "USD":
            return amount * 1.07;
        };
      case "GBP":
        switch (outputCurrency) {
          case "PLN":
            return amount * 5.19;
          case "EUR":
            return amount * 1.16;
          case "USD":
            return amount * 1.24;
        };
      case "USD":
        switch (outputCurrency) {
          case "PLN":
            return amount * 4.18;
          case "EUR":
            return amount * 0.93;
          case "GBP":
            return amount * 0.80;
        };
    };
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const outputCurrencyElement = document.querySelector(".js-outputCurrency");
    const amountElement = document.querySelector(".js-amountToConvert");
    const resultElement = document.querySelector(".js-result");

    const inputCurrency = inputCurrencyElement.value;
    const outputCurrency = outputCurrencyElement.value;

    const amount = +amountElement.value;
    const result = calculateResult(inputCurrency, outputCurrency, amount);

    updateResultText(inputCurrency, outputCurrency, resultElement, result);
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
};