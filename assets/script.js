let searchButton = document.querySelector('button');
let cityName = ('');
let cityN = document.getElementById('searchTerm');
let recentSearchEl = document.getElementById('recentSearch');
let reset = document.getElementById('reset');
let nameValue = document.querySelector('.search-name-today');
let tempValue = document.querySelector('.search-temp-today');
let descValue = document.querySelector('.search-description-today');
let windValue = document.querySelector('.search-wind-today');


//set cityname to local storage
//localStorage.setItem('cityName', JSON.stringify(cityName));

//add event listener for button click function
searchButton.addEventListener('click', function () {
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

    document.querySelector('.search-name-day1').innerHTML = nameValue;
    document.querySelector('.search-temp-day1').innerHTML = 'feels like: ' + tempValue + '°C';
    document.querySelector('.search-description-day1').innerHTML = descValue;
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
  
      document.querySelector('.search-name-day2').innerHTML = nameValue;
      document.querySelector('.search-temp-day2').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day2').innerHTML = descValue;
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
  
      document.querySelector('.search-name-day3').innerHTML = nameValue;
      document.querySelector('.search-temp-day3').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day3').innerHTML = descValue;
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
  
      document.querySelector('.search-name-day4').innerHTML = nameValue;
      document.querySelector('.search-temp-day4').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day4').innerHTML = descValue;
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
  
      document.querySelector('.search-name-day5').innerHTML = nameValue;
      document.querySelector('.search-temp-day5').innerHTML = 'feels like: ' + tempValue + '°C';
      document.querySelector('.search-description-day5').innerHTML = descValue;
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
        //let dateValue = data['list']['dt_txt'];
    
        document.querySelector('.search-name-today').innerHTML = nameValue;
        document.querySelector('.search-temp-today').innerHTML = 'feels like: ' + tempValue + '°C';
        document.querySelector('.search-description-today').innerHTML = descValue;
        document.querySelector('.search-wind-today').innerHTML = 'wind speed: ' + windValue + 'km/h';
        //document.querySelector('.search-date-day5').innerHTML = dateValue;
        });
  });


//function to get city name
function getCityName() {
  
  cityName = cityN.value;
  console.log(cityName);
  //add cityName variable to local storage
  localStorage.setItem('cityName', JSON.stringify(cityName));
let city = document.createElement('h3');
city.textContent = cityName;
recentSearchEl.appendChild(city);
getApi();
}

//RunApi weather results from cityName
function getApi() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d14b0d70a4eb05b8ec74e11ac993cd4`, {
    method:'GET',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
    })
}


/*//add event listener for reset button
reset.addEventListener('click', function () {
  localStorage.clear('cityName');
//remove created elements
  recentSearchEl.removeChild(city);
  
})*/




function getApi () {

}

//button click to submit search

//function on click input to search term/localstorage
/*var searchFormEl = document.querySelector('#search-form');

 .then(function (data) {
    console.log(data);
    let nameValue = data['city']['name'];
    let tempValue = data['list'][8]['main']['temp'];
    let descValue = data['list'][8]['weather'][8]['description'];
    let windValue = data['list'][8]['wind']['speed'];

    document.querySelector('.search-name-day1').innerHTML = nameValue;
    document.querySelector('.search-temp-day1').innerHTML = 'Currently feels like: ' + tempValue + '°C';
    document.querySelector('.search-description-day1').innerHTML = descValue;
    document.querySelector('.search-wind-day1').innerHTML = 'Current wind speed: ' + windValue + 'km/h';
    })
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#cityN').value;
  

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);



function getApi() {
    console.log('hey');
    let requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q={'+ cityName +'}&appid={4d14b0d70a4eb05b8ec74e11ac993cd4}';
    console.log(cityName);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating a h3 element and a p element
          var userName = document.createElement('h3');
          var userUrl = document.createElement('p');
  
          //Setting the text of the h3 element and p element.
          userName.textContent = data[i].login;
          userUrl.textContent = data[i].url;
  
          //Appending the dynamically generated html to the div associated with the id="users"
          //Append will attach the element as the bottom most child.
          usersContainer.append(userName);
          usersContainer.append(userUrl);
        }
      });
  }
  searchButton.addEventListener('submit', getApi);

  // add event listener for button click function
*/