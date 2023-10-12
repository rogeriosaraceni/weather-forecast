const key = "3a98aadd614c70dd2a72bc2abef4ecee"
const lang = "pt_br"
const units = "metric"
const btnSearch = document.querySelector('[data-btn="search"]')

const city = document.querySelector('[data-info="city"]')
const temperature = document.querySelector('[data-info="temperature"]')
const icon = document.querySelector('[data-info="icon"]')
const description = document.querySelector('[data-info="description"]')
const humidity = document.querySelector('[data-info="humidity"]')

function showData(data) {
    console.log(data)

    city.innerText = `${data.name}`
    temperature.innerText = "Temp: " + Math.floor(data.main.temp) + " ºC"

    description.innerText = `${data.weather[0].description}`
    humidity.innerText = `Umidade: ${data.main.humidity} %`
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(inputCity) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&lang=${lang}&units=${units}`)
    .then(response => response.json())
    showData(data)
}

btnSearch.addEventListener('click', () => {
    const inputCity = document.querySelector('[data-input="city"]').value
    searchCity(inputCity)
})
