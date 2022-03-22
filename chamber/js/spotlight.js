const spotlightUrl = "https://datadigitalshredder.github.io/wdd230/chamber/jsonfolder/data.json";

fetch(spotlightUrl)
    .then((response) => response.json())

    .then((jsObject1) => {
        console.log(jsObject1);
        document.querySelector('#gold-name').textContent = jsObject1.companies[1].name; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
        // document.querySelector('#gold-image').textContent = jsObject1.companies[1].logo; 

        // const goldSpotlight = `https://datadigitalshredder.github.io/wdd230/chamber/jsonfolder/data/${jsObject1.companies[1].logo}.json`; 
        const goldNumber = jsObject1.companies[1].phone; 
        const goldSite = jsObject1.companies[1].website; 


        // const iconsrc = `https://openweathermap.org/img/w/${jsObject1.weather[0].icon}.png`;
        // const desc = jsObject1.weather[0].description;
        // const windSpeed = (jsObject1.wind.speed) * 3.6;



        // document.querySelector('#icon-src').textContent = iconsrc;
        // document.querySelector('#gold-image').textContent = goldSpotlight;
        document.querySelector('#gold-number').textContent = goldNumber;
        document.querySelector('#gold-site').textContent = goldSite;


        // document.querySelector('#gold-image').setAttribute('src');
        // document.querySelector('#gold-image').setAttribute('alt');
        // document.querySelector('figcaption').textContent = desc;
        // document.querySelector('#windspeed').textContent = Math.round(windSpeed * 10) /10;
        // document.querySelector('#weather-timestamp').textContent = weatherTimeStamp;

    });
