const url = 'https://api.openweathermap.org/data/2.5/'
const key = '36c91b06645f4e24972b18dcfe6ea41c'

const setQuery = (e) => {
    if(e.keyCode == '13')
      getResult(searchBar.value)

}

Const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.inneeTexr = '${result.name}, ${result.sys.country}'

    let temp = document.querySelector('.city')
    temp.innerText = '${Math.round(result.main.temp)}C'

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('minmax')
    minmax.innerText = '${math.round(result.main.temp_min)}C/
    ${Math.round(result.main.temp_max)}C' 

}

Const searchBar = document.getElementById('searchBar')
searchBar.addEventlistener('keypress',setQuery)