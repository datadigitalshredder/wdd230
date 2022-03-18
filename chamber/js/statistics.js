
// GETTING STATS FROM THE WEATHER API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=878549&q=Zvishavane&units=metric&appid=164e183ac818600411c3484dc71c4f9f";

fetch(apiUrl)
    .then((response) => response.json())

    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = Math.round((jsObject.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
        document.querySelector('#coord1').textContent = jsObject.coord.lat;
        document.querySelector('#coord2').textContent = jsObject.coord.lon;
        document.querySelector('#grnd-level').textContent = jsObject.main.grnd_level;
        document.querySelector('#sea-level').textContent = jsObject.main.sea_level;
        document.querySelector('#visibility').textContent = Math.round((jsObject.visibility) / 100) / 10;

        // Daytime hours (sunrise- sunset) and timezone:
        let unix_timeSunRise = jsObject.sys.sunrise;
        let unix_timeSunSet = jsObject.sys.sunset;
        let unix_timezone = jsObject.timezone;

        const date1 = new Date(unix_timeSunRise * 1000);
        const date2 = new Date(unix_timeSunSet * 1000);
        const timezone = new Date(unix_timezone);

        // Hours part from the timestamp
        const hours1 = date1.getHours();
        const hours2 = date2.getHours();
        const timezoneHours = timezone.getTimezoneOffset() / -60;

        // Minutes part from the timestamp
        const minutes1 = `0${date1.getMinutes()}`;
        const minutes2 = `0${date2.getMinutes()}`;

        // Will display time in 10:30:23 format
        const formattedTime1 = `${hours1}:${minutes1.substr(-2)}`;
        const formattedTime2 = `${hours2}:${minutes2.substr(-2)}`;

        const sunRise = formattedTime1;
        const sunSet = formattedTime2;

        document.querySelector('#sunrise').textContent = sunRise;
        document.querySelector('#sunset').textContent = sunSet;
        document.querySelector('#timezone').textContent = timezoneHours;

    });