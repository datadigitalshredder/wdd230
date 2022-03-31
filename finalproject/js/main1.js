// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

// Retrieve random temples for the Home page
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";

fetch(templeUrl)
    .then((response) => response.json())

    .then((jsObject) => {
            // Randomly select a temple for the home banner
            let temple =  jsObject.temples;

            for (let i = 0; i < temple.length; i++){

            randomTemple = temple[Math.floor(Math.random() * temple.length)];
        //console.log(randomTemple);
            const iconsrc = `${randomTemple.photo}`;
            const desc = `Photo of ${randomTemple.name}`;
            document.querySelector('#home-image').setAttribute('src', iconsrc);
            document.querySelector('#home-image').setAttribute('alt', desc);
            };

        //Randomly select a temple to share details
            let templeDetails = jsObject.temples;
            // let templeDetalisWeather = jsObject;
            
            for (let i = 0; i < templeDetails.length; i++){
            let randomTempleDetails = templeDetails[Math.floor(Math.random() * templeDetails.length)];
            const iconsrcdetailed = `${randomTempleDetails.photo}`;
            const descdetailed = `Photo of ${randomTempleDetails.name}`;
            let cityId = randomTempleDetails.cityID;
            const templeCityId =  randomTempleDetails.filter(cityId => cityId.cityID === `${cityId}`);
            
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed);
            document.querySelector('#random-name').innerHTML = randomTempleDetails.name;
            document.querySelector('#random-address').innerHTML = randomTempleDetails.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails.history;
        //     };

           
            
            // USING THE WEATHER API
            // Using the Open Weather API for the randomly selected temple
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${templeCityId}&units=imperial&appid=164e183ac818600411c3484dc71c4f9f`;
            console.log(apiURL);
            

            fetch(apiURL)
                .then((response1) => response1.json())

                .then((jsObject1) => {
                    console.log(jsObject1)
                    document.querySelector('#random-current-temp').textContent = Math.round((jsObject1.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
                    const iconsrcWeather = `https://openweathermap.org/img/w/${jsObject1.weather[0].icon}.png`;
                    const descWeather = jsObject1.weather[0].description;
                    const windSpeed = jsObject1.wind.speed;

                    // Data receiving time update:
                    let unix_timestamp = jsObject1.dt
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
                    document.querySelector('#random-weathericon').setAttribute('src', iconsrcWeather);
                    document.querySelector('#random-weathericon').setAttribute('alt', descWeather);
                    document.querySelector('figcaption').textContent = descWeather;
                    document.querySelector('#random-windspeed').textContent = Math.round(windSpeed * 10) /10;
                    document.querySelector('#random-weather-timestamp').textContent = weatherTimeStamp;

                });

                
            };
    });

// WNDCHILL CALCULATION
let t = document.querySelector('#random-current-temp').textContent;
let s = document.querySelector('#random-windspeed').textContent;
let windChill = '';

if (t <= 50 && s > 3) {
    windChill = computeWindChill(t,s);
    windChill = `${windChill} &#176;F`;
} 
else {
    windChill = 'N/A';
}
//OUTPUT
document.querySelector('#random-windchill').innerHTML = windChill;

function computeWindChill(temp, speed) {
    windChillFactor = 35.74 + (0.6216 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    //     windChillFactorCelcius = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    windChillFactorRounded = Math.round(windChillFactor * 10) / 10;
    return windChillFactorRounded;
}