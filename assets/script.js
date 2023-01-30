let searchButton = document.querySelector('button');
let cityName = ('');
let cityN = document.getElementById('searchTerm');
let recentSearchEl = document.getElementById('recentSearch');
let reset = document.getElementById('reset');
let nameValue = document.querySelector('.search-name');
let tempValue = document.querySelector('.search-temp');
let descValue = document.querySelector('.search-description');
let windValue = document.querySelector('.search-wind');


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
    let tempValue = data['list'][0]['main']['temp'];
    let descValue = data['list'][0]['weather'][0]['description'];
    let windValue = data['list'][0]['wind']['speed'];

    document.querySelector('.search-name').innerHTML = nameValue;
    document.querySelector('.search-temp').innerHTML = 'Currently feels like: ' + tempValue + '°C';
    document.querySelector('.search-description').innerHTML = descValue;
    document.querySelector('.search-wind').innerHTML = 'Current wind speed: ' + windValue + 'km/h';


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