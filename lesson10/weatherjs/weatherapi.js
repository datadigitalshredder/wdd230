const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5861897&q=Fairbanks&units=imperial&appid=164e183ac818600411c3484dc71c4f9f";

fetch(apiURL)
    .then((response) => response.json())

    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = Math.round((jsObject.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
        const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });

//fetch(apiURL)
    //.then(function (response) {
        //return response.json();
    //})
    //.then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
    //});
