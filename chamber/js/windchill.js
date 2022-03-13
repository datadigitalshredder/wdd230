// WNDCHILL CALCULATION
let t = document.querySelector('#current-temp').textContent;
let s = document.querySelector('#windspeed').textContent;
let windChill = '';

if (t <= 10 && s > 4.828032) {
    windChill = computeWindChill(t,s);
    windChill = `${windChill} &#176;F`;
} 
else {
    windChill = 'N/A';
}
//OUTPUT
document.querySelector('#windchill').innerHTML = windChill;

function computeWindChill(temp, speed) {
    //windChillFactor = 35.74 + (0.6216 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    windChillFactorCelcius = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    windChillFactorRounded = Math.round(windChillFactorCelcius * 10) / 10;
    return windChillFactorRounded;
}

// USING THE WEATHER API

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=878549&q=Zvishavane&units=metric&appid=164e183ac818600411c3484dc71c4f9f";

fetch(apiURL)
    .then((response) => response.json())

    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = Math.round((jsObject.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        const windSpeed = jsObject.wind.speed * 3.6;
        //const weatherTimeStamp = jsObject.dt;

        // Data receiving time update:
        let unix_timestamp = jsObject.dt
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        const date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        const hours = date.getHours();
        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        const seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        const weatherTimeStamp = formattedTime;

        //document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
        document.querySelector('#windspeed').textContent = Math.round(windSpeed * 10) /10;
        document.querySelector('#weather-timestamp').textContent = weatherTimeStamp;

    });