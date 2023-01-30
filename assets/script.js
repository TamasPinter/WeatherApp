let searchButton = document.querySelector('button');
let cityName = [''];
let cityN = document.getElementById('searchTerm');
let recentSearchEl = document.getElementById('recentSearch');
let reset = document.getElementById('reset');
let nameValue = document.querySelector('.search-name-today');
let tempValue = document.querySelector('.search-temp-today');
let descValue = document.querySelector('.search-description-today');
let windValue = document.querySelector('.search-wind-today');

//make localstorage array
let recentSearch = JSON.parse(localStorage.getItem('recentSearch')) || [];

//add event listener for button click function
searchButton.addEventListener('click', function () {
  console.clear();
  getCityName();
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let nameValue = data['city']['name'];
    let tempValue = data['list'][3]['main']['temp'];
    let descValue = data['list'][3]['weather'][0]['description'];
    let windValue = data['list'][3]['wind']['speed'];
    let dateValue = data['list'][3]['dt_txt'];
    let iconValue = data['list'][3]['weather'][0]['icon'];

    document.querySelector('.search-name-day1').innerHTML = nameValue;
    document.querySelector('.search-temp-day1').innerHTML = 'feels like: ' + tempValue + '°C';
    document.querySelector('.search-description-day1').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
    document.querySelector('.search-wind-day1').innerHTML = 'wind speed: ' + windValue + 'km/h';
    document.querySelector('.search-date-day1').innerHTML = dateValue;
    });
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let nameValue = data['city']['name'];
      let tempValue = data['list'][11]['main']['temp'];
      let descValue = data['list'][11]['weather'][0]['description'];
      let windValue = data['list'][11]['wind']['speed'];
      let dateValue = data['list'][11]['dt_txt'];
      let iconValue = data['list'][11]['weather'][0]['icon'];
  
      document.querySelector('.search-name-day2').innerHTML = nameValue;
      document.querySelector('.search-temp-day2').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day2').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
      document.querySelector('.search-wind-day2').innerHTML = 'wind speed: ' + windValue + 'km/h';
      document.querySelector('.search-date-day2').innerHTML = dateValue;
      });
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let nameValue = data['city']['name'];
      let tempValue = data['list'][19]['main']['temp'];
      let descValue = data['list'][19]['weather'][0]['description'];
      let windValue = data['list'][19]['wind']['speed'];
      let dateValue = data['list'][19]['dt_txt'];
      let iconValue = data['list'][19]['weather'][0]['icon'];
  
      document.querySelector('.search-name-day3').innerHTML = nameValue;
      document.querySelector('.search-temp-day3').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day3').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
      document.querySelector('.search-wind-day3').innerHTML = 'wind speed: ' + windValue + 'km/h';
      document.querySelector('.search-date-day3').innerHTML = dateValue;
      });
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let nameValue = data['city']['name'];
      let tempValue = data['list'][27]['main']['temp'];
      let descValue = data['list'][27]['weather'][0]['description'];
      let windValue = data['list'][27]['wind']['speed'];
      let dateValue = data['list'][27]['dt_txt'];
      let iconValue = data['list'][27]['weather'][0]['icon'];
  
      document.querySelector('.search-name-day4').innerHTML = nameValue;
      document.querySelector('.search-temp-day4').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day4').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
      document.querySelector('.search-wind-day4').innerHTML = 'wind speed: ' + windValue + 'km/h';
      document.querySelector('.search-date-day4').innerHTML = dateValue;
      });
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let nameValue = data['city']['name'];
      let tempValue = data['list'][35]['main']['temp'];
      let descValue = data['list'][35]['weather'][0]['description'];
      let windValue = data['list'][35]['wind']['speed'];
      let dateValue = data['list'][35]['dt_txt'];
      let iconValue = data['list'][35]['weather'][0]['icon'];
  
      document.querySelector('.search-name-day5').innerHTML = nameValue;
      document.querySelector('.search-temp-day5').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day5').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
      document.querySelector('.search-wind-day5').innerHTML = 'wind speed: ' + windValue + 'km/h';
      document.querySelector('.search-date-day5').innerHTML = dateValue;
      });
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`,)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        let windValue = data['wind']['speed'];
        let iconValue = data['weather'][0]['icon'];
    
        document.querySelector('.search-name-today').innerHTML = nameValue;
        document.querySelector('.search-temp-today').innerHTML = 'feels like: ' + tempValue + '°C';
        document.querySelector('.search-description-today').innerHTML = descValue + ' ' + '<img src="http://openweathermap.org/img/w/' + iconValue + '.png" alt="weather icon">';
        document.querySelector('.search-wind-today').innerHTML = 'wind speed: ' + windValue + 'km/h';
       
        });
  });


//function to get city name
function getCityName() {
  
  cityName = cityN.value;
  console.log(cityName);
  function addCity() {
    // Parse any JSON previously stored in cityName
     cityName = JSON.parse(localStorage.getItem("cityName")) || [];
    if(cityName == null) cityName = [];
    // Add new data to cityName array
    recentSearch.push(cityName);
    // Save cityName back to local storage
    localStorage.setItem("recentSearch", JSON.stringify(cityName));
  }
let city = document.createElement('h3');
city.textContent = cityName;
recentSearchEl.appendChild(city);
}

