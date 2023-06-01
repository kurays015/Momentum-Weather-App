//API_KEY = 09b5f262144a058f65a9c1820bee5462
// /https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}


const form = document.querySelector('form');
const weatherDetails = document.querySelector('.weather-details');
const smallIcons = document.querySelector('.small-icons-container');
const weatherModalContainer = document.querySelector('.weather-modal-container');




form.addEventListener('submit', e => {
  e.preventDefault();

  //city na itatype sa input
  const city = form.city.value;

  //after mag type, reset sya.
  form.reset()

  //kukunin ang itatype sa input na city at ipapasa sa getCityandWeather function
  getCityandWeather(city);

  //class .expanded added
  weatherModalContainer.classList.add('expanded');

})



//Fetch the data
const getCityandWeather = async (city) => {

  const API_KEY = '09b5f262144a058f65a9c1820bee5462'

  
  try {
    //get data
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    const response = await fetch(URL);
    
   
    const data = await response.json();
    //pass the data to displayWeather function
    displayWeather(data);


  } catch(error) {
     alert('Invalid City')   
  }
}


//Display the weather details
function displayWeather(data) {

  const temp = Math.round(data.main.temp);
  let weatherIcon = document.querySelector('.weather-icon');

  if (data.weather[0].main === 'Clouds') {
    weatherIcon.src = 'img/clouds.png';
  } else if (data.weather[0].main === 'Clear') {
    weatherIcon.src = 'img/clear.png';
  } else if (data.weather[0].main === 'Rain') {
    weatherIcon.src = 'img/rainy.png';
  } else if (data.weather[0].main === 'Drizzle') {
    weatherIcon.src = 'img/drizzle.png';
  } else if (data.weather[0].main === 'Mist') {
    weatherIcon.src = 'img/mist.png';
  }


  // Create a new li element for the weather icon
  const weatherIconItem = document.createElement('li');
  weatherIcon.setAttribute('data-aos', 'fade-right');
  weatherIconItem.appendChild(weatherIcon);
  
  let html = ` 

            <li data-aos="fade-right"
            data-aos-duration="1000" ><span> ${temp}°C </span> <img src="img/temperature.png" class="temp"></li>

            <li data-aos="fade-right" 
            data-aos-duration="1000"><span> ${data.wind.speed}km/h </span><img src="img/wind.png" class="speed"></li>

            <li data-aos="fade-left" 
            data-aos-duration="1000"><span>${data.main.humidity} %</span><img src="img/humidity.png" class="humidity"></li>

            <li data-aos="fade-left" 
            data-aos-duration="1000"><span>${data.main.pressure}</span> <img src="img/pressure.png" class="pressure"></li>
            `;

  let html2 = `
            <div class="small-icons-container">
            <h5 >Wind
              <img class="small-icons" src="img/wind.png">
            </h5>
            <h5 >Temp
              <img class="small-icons" src="img/temperature.png">
            </h5>
            <h5 >
              Humidity
              <img class="small-icons" src="img/humidity.png">
            </h5>
            <h5 >
              Pressure
              <img class="small-icons" src="img/pressure.png">
            </h5> 
          </div>  
  `

    // Clear the existing content of the weather container
    weatherDetails.innerHTML = '';

    // Append the weather icon item and other details to the weather container
    const weather = document.querySelector('.weather');

    //display city and longitude and latitude
    document.querySelector('.city-name').innerHTML = `${data.name}`;
    document.querySelector('.lon').innerHTML = `Latitude: ${data.coord.lat}`;
    document.querySelector('.lat').innerHTML = `Longitude: ${data.coord.lon}`;
    document.querySelector('.weather-description').innerHTML = `${data.weather[0].description}`;

    weather.appendChild(weatherIconItem);
    weatherDetails.innerHTML += html;
    weather.innerHTML += html2;
   

    //add AOS animation manually
    const animations = document.querySelectorAll('.city-name, .lon, .lat, .weather-details');

    animations.forEach(animation => {
      animation.setAttribute('data-aos', 'zoom-in');
    })


    AOS.init();
}



  
