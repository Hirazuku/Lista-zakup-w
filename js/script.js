{
    const calculateValue = (event) => {
        event.preventDefault();

        const amount = document.querySelector(".js-A");
        const exchangeRate = document.querySelector(".js-eR");
        const value = amount.value * exchangeRate.value;
        const finalValue = document.querySelector(".js-finalValue");
        finalValue.innerText = value;
    };

    const init = () => {
        const money = document.querySelector(".js-currency");
        money.addEventListener("submit", calculateValue)
    };

    init();
}