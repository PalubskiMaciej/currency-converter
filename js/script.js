{







  const calculateResult = (startedCurrency, finalCurrency, amount) => {
    switch (startedCurrency) {
      case "PLN":
        switch (finalCurrency) {
          case "EUR":
            return amount * 0.22;
          case "GBP":
            return amount * 0.19;
          case "USD":
            return amount * 0.24;
        }
        break;
      case "EUR":
        switch (finalCurrency) {
          case "PLN":
            return amount * 4.47;
          case "GBP":
            return amount * 0.86;
          case "USD":
            return amount * 1.07;
        }
        break;
      case "GBP":
        switch (finalCurrency) {
          case "PLN":
            return amount * 5.19;
          case "EUR":
            return amount * 1.16;
          case "USD":
            return amount * 1.24;
        }
        break;
      case "USD":
        switch (finalCurrency) {
          case "PLN":
            return amount * 4.18;
          case "EUR":
            return amount * 0.93;
          case "GBP":
            return amount * 0.80;
        }
        break;
    }



  }

  const onFormSubmit = (startedCurrencyElement, finalCurrencyElement, resultElement) => {
    return (event) => {
      event.preventDefault();

      const startedCurrency = startedCurrencyElement.value;
      const finalCurrency = finalCurrencyElement.value;
      const amountElement = document.querySelector(".js-amountToConvert");
      const amount = +amountElement.value;

      const result = calculateResult(startedCurrency, finalCurrency, amount);



      if (startedCurrency.localeCompare(finalCurrency) === 0) {
        resultElement.innerText = `Wybierz różne waluty`;
      } else {
        resultElement.innerText = `Po przeliczeniu wyszło: ${(result.toFixed(2))} ${(finalCurrency)}`;
      }
    };
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    const startedCurrencyElement = document.querySelector(".js-startedCurrency");
    const finalCurrencyElement = document.querySelector(".js-finalCurrency");
    const resultElement = document.querySelector(".js-result");
    form.addEventListener("submit", onFormSubmit(startedCurrencyElement, finalCurrencyElement, resultElement));
  };

  init();
}


