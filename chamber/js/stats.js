
// GETTING STATS FROM THE WEATHER API
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=878549&q=Zvishavane&units=metric&appid=164e183ac818600411c3484dc71c4f9f";

fetch(apiURL)
    .then((response) => response.json())

    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = Math.round((jsObject.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
        document.querySelector('#coord1').textContent = jsObject.coord.lat;
        document.querySelector('#coord2').textContent = jsObject.coord.lon;
        document.querySelector('#grnd-level').textContent = jsObject.main.grnd_level;
        document.querySelector('#sea-level').textContent = jsObject.main.sea_level;
        document.querySelector('#visibility').textContent = jsObject.sys.visibility;

        // const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        // const desc = jsObject.weather[0].description;
        // const windSpeed = jsObject.wind.speed * 3.6;

        // const coordLat = jsObject.coord.lat;
        // const coordLong = jsObject.coord.lon;

        // Data receiving time update:
        // const unix_timezone = jsObject.timezone;
        let unix_timeSunRise = jsObject.sys.sunrise;
        let unix_timeSunSet = jsObject.sys.sunset;
        // let unix_timestamp = jsObject.dt
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        const date = new Date(unix-unix_timeSunRise * 1000);
        const date1 = new Date(unix_timeSunSet * 1000);

        // Hours part from the timestamp
        const hours = date.getHours();
        const hours1 = date1.getHours();

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();
        const minutes1 = "0" + date1.getMinutes();

        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds();
        const seconds1 = "0" + date1.getSeconds();

        // Will display time in 10:30:23 format
        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        const formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

        const sunRise = formattedTime;
        const sunSet = formattedTime1;

        //document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#windspeed').textContent = Math.round(windSpeed * 10) /10;
        document.querySelector('#sunrise').textContent = sunRise;
        document.querySelector('#sunset').textContent = sunSet;
  
        // document.querySelector('#coordinates').textContent = windSpeed;

        // document.querySelector('#coordinates').textContent = coordLong;
    });