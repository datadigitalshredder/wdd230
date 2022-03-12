// select the elements to manipulate (output to)
// const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `<strong>Last updated</strong>: ${document.lastModified}`;

let weekDay;
// Assign the to the day of the week ( hint: getDay() )
weekDay = now.getDay();
// Declare a variable to hold a message that will be displayed
let message;
// Using an if statement, if the day of the week is Monday or Tuesday, set a message
if (weekDay >= 1 && weekDay <= 2) {
    message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.!';
}
// Using an else statement, set the message variable to set another message
else {
   message = '🤝🏼 Come join us next Wednesday at 7:00 p.m. for the chamber meet and greet!';
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
//let message1;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (weekDay) {
    case 0:
        message1 = 'Sunday';
        break;
    case 1:
        message1 = 'Monday';
        break;
    case 2:
        message1 = 'Tuesday';
        break;
    case 3:
        message1 = 'Wednesday';
        break;
    case 4:
        message1 = 'Thursday';
        break;
    case 5:
        message1 = 'Friday';
        break;
    case 6:
        message1 = 'Saturday';
        break;
    default:
        message1 = 'Unknown - ' + weekDay;
        break;
}

/* OUTPUT */

// Assign the value of the message variable to the HTML element with an ID of message, following the if block. 
document.querySelector('#message').textContent = message;

// The hamburger button
function toggleMenu (){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');

}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// The message toggle functionality
function todaysMessage() {
    let x = document.getElementById("todaysMessage");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// Number of visits functionality
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits > 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome to Zvishavane Town!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// LAST VISITED DAYS
const lastVisit = localStorage.getItem('lastvisit');

const conversionFactor = 24 * 60 * 60 * 1000;

let daysSinceVisit = Date.now() - lastVisit;

let numberOfDays = Math.round(daysSinceVisit / conversionFactor);
//console.log(numberOfDays);

localStorage.setItem('lastvisit', Date.now());

const lastVisitsDisplay = document.querySelector(".lastvisit");
//let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits > 0) {
    lastVisitsDisplay.textContent = numberOfDays;
} else {
    lastVisitsDisplay.textContent = `N/A`;
}

// JSON (Directory page)
const requestUrl = "https://datadigitalshredder.github.io/wdd230/chamber/data.json";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const companies = jsonObject['companies'];
    
    companies.forEach(displayCompanies); 
  });

function displayCompanies(company) { // Create elements to add to the document
    let card = document.createElement('section'); 
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let tradeHours = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let site = document.createElement('p');
            
    // Change the textContent property of the h2 element to contain the company's details
    img.setAttribute('src', company.logo);
    img.setAttribute('alt', `Logo of ${company.name}`);
    h2.textContent = `${company.name}`;
    tradeHours.textContent = `${company.open}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    site.textContent = `${company.website}`;

    //birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
    //birthPlace.textContent =`Birth Place: ${prophet.birthplace}`;
    
    
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(tradeHours);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);
    //card.appendChild(birthDate);
    //card.appendChild(birthPlace);
    

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }