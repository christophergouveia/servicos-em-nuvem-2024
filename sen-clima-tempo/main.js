let apiKey = "cfcbf17c77e386b244fad41ab0dc6eec"
function verificarInput(element, event) {
    if(event.key === "Enter") {
        getClima(element.value, true);
    }
}

function getClima(cidade, enter = false, lat = "", long = "") {
    let apiURL = "";
    if(enter) {
        apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
    } else {
        apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=pt_br`
    }
    fetch(apiURL).then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then((dados) => {
        console.log(dados)
        let cidade = dados.name;
        let celsius = dados.main.temp;
        let clima = dados.weather[0].description;
        clima = clima[0].charAt(0).toUpperCase() + clima.slice(1);

        document.getElementById("cidade").innerText = `${cidade}, ${dados.sys.country}`;
        document.getElementById('temperatura').innerHTML = `${celsius}<sup>ºC</sup>`;
        document.getElementById('clima').innerText = `${clima}`;
        document.getElementById("clima_imagem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    })
}

window.onload = () => {
    navigator.geolocation.getCurrentPosition(getGeolocation);
}

function getGeolocation(position) {
    getClima("", false, position.coords.latitude, position.coords.longitude);
}