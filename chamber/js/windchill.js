// WNDCHILL CALCULATION
let t = document.querySelector('#weather-temp').textContent;
let s = document.querySelector('#windspeed').textContent;
let windChill = '';

if (t <= 50 && s > 3) {
    windChill = computeWindChill(t,s);
    windChill = `${windChill} &#176;F`;
} 
else {
    windChill = 'N/A';
}
//OUTPUT
document.querySelector('#windchill').innerHTML = windChill;

function computeWindChill(temp, speed) {
    windChillFactor = 35.74 + (0.6216 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    //windChillFactorCelcius = 13.12 + 0.6215T – 11.37 (V^0.16) + 0.3965T (V^0.16)
    windChillFactorRounded = Math.round(windChillFactor * 10) / 10;
    return windChillFactorRounded;
}