const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const reverseSelect = document.querySelector(".reverse-select")

async function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted =document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL,BTC-BRL")
    const json = await data.json()

    const rates = {
        USD: json.USDBRL.high,
        EUR: json.EURBRL.high,
        GBP: json.GBPBRL.high,
        ARS: json.ARSBRL.high,
        BTC: json.BTCBRL.high
    };

    const from = reverseSelect.value;
    const to = currencySelect.value;

    if(from == "BRL") {
        valueInBRL = inputCurrencyValue;
    } else {
        valueInBRL = inputCurrencyValue * rates[from];          
    }
    let convertedValue;
    if(to == "BRL") {
        convertedValue = valueInBRL;
    } else {
        convertedValue = valueInBRL / rates[to];
    }

    
    
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: from,
  }).format(inputCurrencyValue);

  currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: to,
  }).format(convertedValue);

}

function changeCurrency() {
    const currencyImg = document.querySelector(".imagem")
    const currencyName = document.querySelector(".currency-converted")

   const images = {
        USD: { name: "Dólar Americano", src: "./assets/Dolar.png" },
        EUR: { name: "Euro", src: "./assets/Euro.png" },
        GBP: { name: "Libra", src: "./assets/Libra.png" },
        ARS: { name: "Peso Argentino", src: "./assets/Peso.png" },
        BTC: { name: "Bitcoin", src: "./assets/Bitcoin.png" },
        BRL: { name: "Real Brasileiro", src: "./assets/Real.png" },
    };

    const selected = currencySelect.value;
    currencyName.innerHTML = images[selected].name;
    currencyImg.src = images[selected].src;
    convertValues()

    }
function reverseCurrency() {
    const reverseImg = document.querySelector(".imgup")
    const reverseName = document.querySelector(".currency") 

       const images = {
        USD: { name: "Dólar Americano", src: "./assets/Dolar.png" },
        EUR: { name: "Euro", src: "./assets/Euro.png" },
        GBP: { name: "Libra", src: "./assets/Libra.png" },
        ARS: { name: "Peso Argentino", src: "./assets/Peso.png" },
        BTC: { name: "Bitcoin", src: "./assets/Bitcoin.png" },
        BRL: { name: "Real Brasileiro", src: "./assets/Real.png" },
    };
    const selected = reverseSelect.value;
    reverseName.innerHTML = images[selected].name;
    reverseImg.src = images[selected].src;
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
reverseSelect.addEventListener("change", reverseCurrency);