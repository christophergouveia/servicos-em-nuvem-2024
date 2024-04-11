const moedas = {
  EUR: "Euro",
  USD: "US Dollar",
  JPY: "Japanese Yen",
  BGN: "Bulgarian Lev",
  CZK: "Czech Republic Koruna",
  DKK: "Danish Krone",
  GBP: "British Pound Sterling",
  HUF: "Hungarian Forint",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  SEK: "Swedish Krona",
  CHF: "Swiss Franc",
  ISK: "Icelandic Króna",
  NOK: "Norwegian Krone",
  HRK: "Croatian Kuna",
  RUB: "Russian Ruble",
  TRY: "Turkish Lira",
  AUD: "Australian Dollar",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CNY: "Chinese Yuan",
  HKD: "Hong Kong Dollar",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  ZAR: "South African Rand",
};

let apiKey = "fca_live_rXYIjaB5VQqNwjdXaTMcmhiDM6CwPGwJ1O5PCPKG";
let moedasHTML = "";

for (moeda in moedas) {
  moedasHTML += `<option value="${moeda}">${moeda}</option>`;
}

https: function converter() {
  let valor = document.getElementById("moeda-valor").value;
  if (valor == "" || valor == 0) {
    return false;
  }
  let valorMoeda1 = document.getElementsByName("moeda-1")[0].value;
  let valorMoeda2 = document.getElementsByName("moeda-2")[0].value;
  fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${valorMoeda1}&currencies=${valorMoeda2}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((dados) => {
      console.log(dados);
      for (const [key, value] of Object.entries(dados.data)) {
        document.getElementById("result").innerText = valor*value + " " + key;
      }
    });
}

document.querySelectorAll("select").forEach((value, key) => {
  value.innerHTML = moedasHTML;
});
