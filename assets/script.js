let searchButton = document.querySelector('#search-button');
let cityName = ('');
let cityN = document.querySelector('#cityN');

//add event listener for button click function
searchButton.addEventListener('click', function () {
  getApi();
})

function getApi () {
  
}

//button click to submit search

//function on click input to search term/localstorage
var searchFormEl = document.querySelector('#search-form');

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

  