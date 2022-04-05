// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Getting the last modified date for the footer.
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

// The Menu button
function toggleMenu (){
    document.getElementById('primaryNavigation').classList.toggle('open');
    document.getElementById('hamburgerButton').classList.toggle('open');

}
const btn = document.getElementById('hamburgerButton');
btn.onclick = toggleMenu;

// Retrieve random temples for the Home page
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";

fetch(templeUrl)
    .then((response) => response.json())

    .then((jsObject) => {
            // Randomly select a temple for the home banner
            let temple =  jsObject.temples;

            for (let i = 0; i < temple.length; i++){

                randomTemple = temple[Math.floor(Math.random() * temple.length)];
                const iconsrc = `${randomTemple.photo}`;
                const desc = `Photo of ${randomTemple.name}`;
                document.querySelector('#home-image').setAttribute('src', iconsrc);
                document.querySelector('#home-image').setAttribute('alt', desc);
            };

            //Randomly select a temple to share details
            let templeDetails = jsObject.temples;
            let randomTempleDetails = templeDetails[Math.floor(Math.random() * templeDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails.length; i++){
                
                const iconsrcdetailed = `${randomTempleDetails.photo}`;
                const descdetailed = `Photo of ${randomTempleDetails.name}`;
            
            const cityId = randomTempleDetails.cityID;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed);
            document.querySelector('#random-name').innerHTML = randomTempleDetails.name;
            document.querySelector('#random-address').innerHTML = randomTempleDetails.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails.history;

            // USING THE WEATHER API
            // Using the Open Weather API for the randomly selected temple
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=164e183ac818600411c3484dc71c4f9f`;
            // const apiURLtest = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&exclude=minutely,hourly&units=imperial&appid=164e183ac818600411c3484dc71c4f9f`;
            
            fetch(apiURL)
                .then((response1) => response1.json())

                .then((jsObject1) => {
                    console.log(jsObject1)
                    document.querySelector('#random-current-temp').textContent = Math.round((jsObject1.main.temp) * 10) / 10; // Carefully follow the path to the temp. Note there are different temps for different parts to the city
                    const iconsrcWeather = `https://openweathermap.org/img/w/${jsObject1.weather[0].icon}.png`;
                    const descWeather = jsObject1.weather[0].description;
                    const windSpeed = jsObject1.wind.speed;
                    const humidity = jsObject1.main.humidity;
                    const latitude = jsObject1.coord.lat;
                    const longitude = jsObject1.coord.lon;

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

                    document.querySelector('#random-weathericon').setAttribute('src', iconsrcWeather);
                    document.querySelector('#random-weathericon').setAttribute('alt', descWeather);
                    document.querySelector('figcaption').textContent = descWeather;
                    document.querySelector('#random-windspeed').textContent = Math.round(windSpeed * 10) /10;
                    document.querySelector('#random-humidity').textContent = humidity;

                    document.querySelector('#random-weather-timestamp').textContent = weatherTimeStamp;

                    // WNDCHILL CALCULATION
                    let randomTemp = document.querySelector('#random-current-temp').textContent;
                    let randomSpeed = document.querySelector('#random-windspeed').textContent;
                    let windChill = '';

                    if (randomTemp <= 50 && randomSpeed > 3) {
                        windChill = computeWindChill(randomTemp, randomSpeed);
                        windChill = `${windChill} &#176;F`;
                    } 
                    else {
                        windChill = 'N/A';
                    }
                    //OUTPUT
                    document.querySelector('#random-windchill').innerHTML = windChill;

                    function computeWindChill(temp, speed) {
                        windChillFactor = 35.74 + (0.6216 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
                        windChillFactorRounded = Math.round(windChillFactor * 10) / 10;
                        return windChillFactorRounded;
                    }
                // });
            const apiURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&units=imperial&appid=164e183ac818600411c3484dc71c4f9f`;
            console.log(apiURL2);

            fetch(apiURL2)
                .then((response2) => response2.json())

                .then((jsObject2) => {
                    console.log(jsObject2)

                    // Data forecast tomorrow:
                    const iconsrcForecast1 = `https://openweathermap.org/img/w/${jsObject2.daily[1].weather[0].icon}.png`;
                    const descForecast1 = jsObject2.daily[1].weather[0].description;

                    let unix_timestamp1 = jsObject2.daily[1].dt;
                    const date1 = new Date(unix_timestamp1 * 1000);
                    // Day part of the timestamp
                    const day1 = date1.getDay();
                    const dateFisrtDay = date1.getDate();
                    let day1OfWeek;
                    switch (day1) {
                        case 0:
                            day1OfWeek = 'Sunday';
                            break;
                        case 1:
                            day1OfWeek = 'Monday';
                            break;
                        case 2:
                            day1OfWeek = 'Tuesday';
                            break;
                        case 3:
                            day1OfWeek = 'Wednesday';
                            break;
                        case 4:
                            day1OfWeek = 'Thursday';
                            break;
                        case 5:
                            day1OfWeek = 'Friday';
                            break;
                        case 6:
                            day1OfWeek = 'Saturday';
                            break;
                        default:
                            day1OfWeek = 'Unknown - ' + day1;
                            break;
                    }
                    let order = ``;
                        switch (dateFisrtDay) {
                        case 1:
                            order = `${dateFisrtDay}st`;
                            break;
                        case 2:
                            order = `${dateFisrtDay}nd`;
                            break;
                        case 3:
                            order = `${dateFisrtDay}rd`;
                            break;
                        default:
                            order = `${dateFisrtDay}th`;
                            break;
                        }
                    const formattedDate = `${day1OfWeek} ${order}`;
                    const forecastDate1 = formattedDate;

                    // Data forecast day after tomorrow:
                    const iconsrcForecast2 = `https://openweathermap.org/img/w/${jsObject2.daily[2].weather[0].icon}.png`;
                    const descForecast2 = jsObject2.daily[2].weather[0].description;
                    let unix_timestamp2 = jsObject2.daily[2].dt;
                    const date2 = new Date(unix_timestamp2 * 1000);
                    // Day part of the timestamp
                    const day2 = date2.getDay();
                    const dateSecondDay = date2.getDate();
                    let day2OfWeek;
                    switch (day2) {
                        case 0:
                            day2OfWeek = 'Sunday';
                            break;
                        case 1:
                            day2OfWeek = 'Monday';
                            break;
                        case 2:
                            day2OfWeek = 'Tuesday';
                            break;
                        case 3:
                            day2OfWeek = 'Wednesday';
                            break;
                        case 4:
                            day2OfWeek = 'Thursday';
                            break;
                        case 5:
                            day2OfWeek = 'Friday';
                            break;
                        case 6:
                            day2OfWeek = 'Saturday';
                            break;
                        default:
                            day2OfWeek = 'Unknown - ' + day2;
                            break;
                    }
                    let order2 = ``;
                        switch (dateSecondDay) {
                        case 1:
                            order2 = `${dateSecondDay}st`;
                            break;
                        case 2:
                            order2 = `${dateSecondDay}nd`;
                            break;
                        case 3:
                            order2 = `${dateSecondDay}rd`;
                            break;
                        default:
                            order2 = `${dateSecondDay}th`;
                            break;
                        }
                    const formattedDate2 = `${day2OfWeek} ${order2}`;
                    const forecastDate2 = formattedDate2;

                    // Data forecast third day:
                    const iconsrcForecast3 = `https://openweathermap.org/img/w/${jsObject2.daily[3].weather[0].icon}.png`;
                    const descForecast3 = jsObject2.daily[3].weather[0].description;
                    let unix_timestamp3 = jsObject2.daily[3].dt;
                    const date3 = new Date(unix_timestamp3 * 1000);
                    // Day part of the timestamp
                    const day3 = date3.getDay();
                    const dateThirdDay = date3.getDate();
                    let day3OfWeek;
                    switch (day3) {
                        case 0:
                            day3OfWeek = 'Sunday';
                            break;
                        case 1:
                            day3OfWeek = 'Monday';
                            break;
                        case 2:
                            day3OfWeek = 'Tuesday';
                            break;
                        case 3:
                            day3OfWeek = 'Wednesday';
                            break;
                        case 4:
                            day3OfWeek = 'Thursday';
                            break;
                        case 5:
                            day3OfWeek = 'Friday';
                            break;
                        case 6:
                            day3OfWeek = 'Saturday';
                            break;
                        default:
                            day3OfWeek = 'Unknown - ' + day3;
                            break;
                    }
                    let order3 = ``;
                        switch (dateThirdDay) {
                        case 1:
                            order3 = `${dateThirdDay}st`;
                            break;
                        case 2:
                            order3 = `${dateThirdDay}nd`;
                            break;
                        case 3:
                            order3 = `${dateThirdDay}rd`;
                            break;
                        default:
                            order3 = `${dateThirdDay}th`;
                            break;
                        }
                    const formattedDate3 = `${day3OfWeek} ${order3}`;
                    const forecastDate3 = formattedDate3;

                    // Appending the forecast dates
                    document.querySelector('#forecast-date1').textContent = forecastDate1;
                    document.querySelector('#forecast-date2').textContent = forecastDate2;
                    document.querySelector('#forecast-date3').textContent = forecastDate3;
                    
                    // Appending the forecast temperatures
                    document.querySelector('#forecast-temp1').textContent = Math.round(((jsObject2.daily[1].temp.max + jsObject2.daily[1].temp.min) / 2) * 10) / 10;
                    document.querySelector('#forecast-temp2').textContent = Math.round(((jsObject2.daily[2].temp.max + jsObject2.daily[2].temp.min) / 2) * 10) / 10;
                    document.querySelector('#forecast-temp3').textContent = Math.round(((jsObject2.daily[3].temp.max + jsObject2.daily[3].temp.min) / 2) * 10) / 10;
                    
                    // Appending forecast icons and descriptions
                    document.querySelector('#forecast-icon1').setAttribute('src', iconsrcForecast1);
                    document.querySelector('#forecast-desc1').setAttribute('alt', descForecast1);
                    document.querySelector('#forecast-icon2').setAttribute('src', iconsrcForecast2);
                    document.querySelector('#forecast-desc2').setAttribute('alt', descForecast2);
                    document.querySelector('#forecast-icon3').setAttribute('src', iconsrcForecast3);
                    document.querySelector('#forecast-desc3').setAttribute('alt', descForecast3);

                    // Appending the forecast humidity
                    document.querySelector('#forecast-humidity1').textContent = jsObject2.daily[1].humidity;
                    document.querySelector('#forecast-humidity2').textContent = jsObject2.daily[1].humidity;
                    document.querySelector('#forecast-humidity3').textContent = jsObject2.daily[1].humidity;
                    

                });
                });
            };
    });

    // WORKING WITH SUITES DATA
const suitesURL = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/services.json";
fetch(suitesURL)
    .then((response3) => response3.json())

    .then((jsObject3) => {
            // Randomly select a temple for the home banner
            // let temple =  jsObject3.temples;

            // for (let i = 0; i < temple.length; i++){

            //     randomTemple = temple[Math.floor(Math.random() * temple.length)];
            //     const iconsrc = `${randomTemple.photo}`;
            //     const desc = `Photo of ${randomTemple.name}`;
            //     document.querySelector('#home-image').setAttribute('src', iconsrc);
            //     document.querySelector('#home-image').setAttribute('alt', desc);
            // };

            //Randomly select suites and services to share details
            // Suite/ service 1
            let suitesDetails = jsObject3.suites;
            // let randomSuitesDetails = suitesDetails[Math.floor(Math.random() * suitesDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < suitesDetails.length; i++){
                let randomSuitesDetails1 = suitesDetails[Math.floor(Math.random() * suitesDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.

                
                const iconsrcSuites1 = `${randomSuitesDetails1.photo}`;
                const descSuites1 = `Photo of ${randomSuitesDetails1.name}`;
            // Suite/ service 2
            for (let i = 0; i < suitesDetails.length; i++){
                let randomSuitesDetails2 = suitesDetails[Math.floor(Math.random() * suitesDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.

                
                const iconsrcSuites2 = `${randomSuitesDetails2.photo}`;
                const descSuites2 = `Photo of ${randomSuitesDetails2.name}`;
            // Suite/ service 3
            for (let i = 0; i < suitesDetails.length; i++){
                let randomSuitesDetails3 = suitesDetails[Math.floor(Math.random() * suitesDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.

                
                const iconsrcSuites3 = `${randomSuitesDetails3.photo}`;
                const descSuites3 = `Photo of ${randomSuitesDetails3.name}`;
            // Suite/ service 4
            // for (let i = 0; i < suitesDetails.length; i++){
            //     let randomSuitesDetails4 = suitesDetails[Math.floor(Math.random() * suitesDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.

                
            //     const iconsrcSuites4 = `${randomSuitesDetails4.photo}`;
            //     const descSuites4 = `Photo of ${randomSuitesDetails4.name}`;
            // Appending suites and other rooms
            document.querySelector('#random-suite1').setAttribute('src', iconsrcSuites1);
            document.querySelector('#random-suite1').setAttribute('alt', descSuites1);
            document.querySelector('#random-suite1-name').innerHTML = randomSuitesDetails1.name;

            document.querySelector('#random-suite2').setAttribute('src', iconsrcSuites2);
            document.querySelector('#random-suite2').setAttribute('alt', descSuites2);
            document.querySelector('#random-suite2-name').innerHTML = randomSuitesDetails2.name;

            document.querySelector('#random-suite3').setAttribute('src', iconsrcSuites3);
            document.querySelector('#random-suite3').setAttribute('alt', descSuites3);
            document.querySelector('#random-suite3-name').innerHTML = randomSuitesDetails3.name;

            // document.querySelector('#random-suite4').setAttribute('src', iconsrcSuites4);
            // document.querySelector('#random-suite4').setAttribute('alt', descSuites4);
            // document.querySelector('#random-suite4-name').innerHTML = randomSuitesDetails4.name;
            // document.querySelector('#random-address').innerHTML = randomSuitesDetails.address;
            // document.querySelector('#random-telephone').innerHTML = randomSuitesDetails.telephone;
            // document.querySelector('#random-history').innerHTML = randomSuitesDetails.history;
            };
            };
            };
            // };
        });

// LIKE/ DISLIKE TOGGLE

function likeDislikeToggle(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  // COUNT LIKES
// function clickCounterLikes() {
// if (typeof(Storage) !== "undefined") {
//     if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount);
//     } else {
//     localStorage.clickcount = 1;
//     }
//     document.getElementById("result1").innerHTML = localStorage.clickcount;
// } else {
//     document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
// }
// }

// THIS PART IS WORKING
// function clickCounterLikes() {
//     if (typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//         localStorage.clickcount = "Liked";
//         } else {
//         localStorage.clickcount = "";
//         }
//         document.getElementById("result1").innerHTML = localStorage.clickcount;
//     } else {
//         document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//     }


// function clickCounterDislikes() {
//     if (typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount) {
//         localStorage.clickcount = "";
//         } else {
//         localStorage.clickcount = "Disliked";
//         }
//         document.getElementById("result2").innerHTML = localStorage.clickcount;
//     } else {
//         document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//     }

// Number of visits functionality
const likeMode = document.querySelector("#result1");

// get the stored value in localStorage
let mode = window.localStorage.getItem("likeMode");

// determine if this is the first visit or display the number of visits.
function clickLikes() {
    if (mode  !== 'undefined') {
        likeMode.textContent = "Liked" ;
    } else if (mode == likeMode.textContent) {
        likeMode.textContent = "Disliked";
    }

    // increment the number of visits.
    mode = likeMode;
    // store the new number of visits value
    localStorage.setItem("likeMode", mode);
}

// document.getElementById('like-temple').onclick = changeColor;   

// function changeColor() {
//     document.body.style.color = "purple";
//     return false;
// }  

// TOGGLE LIKE
// let likeMode = localStorage.getItem('likeMode');
// const likeModeToggle = document.querySelector("#result1");

// likeModeToggle.addEventListener("click", () => {
//     console.log('test');
// });

// const enableLike = () => {
//     document.body.classList.add("likemode");
//     localStorage.setItem("likeMode", "enabled");
// };

// const disableLike = () => {
//     document.body.classList.remove("likemode");
//     localStorage.setItem("likeMode", null);
// };

// likeModeToggle.addEventListener("click", () => {
//     if (likeMode !== "enabled") {
//         enableLike();
//     } else {
//         disableLike();
//     }
// });
