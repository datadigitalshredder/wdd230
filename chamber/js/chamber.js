// select the elements to manipulate (output to)
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
// const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// long, medium, short options ... try them

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

// OUTPUT
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
if (numVisits !== 0) {
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
if (numVisits !== 0) {
    lastVisitsDisplay.textContent = numberOfDays;
} else {
    lastVisitsDisplay.textContent = `N/A`;
}

// JSON (Directory page)
const requestUrl = "https://datadigitalshredder.github.io/wdd230/chamber/JSON/data.json";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

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
    let site = document.createElement('a');
            
    // Change the textContent property of the h2 element to contain the company's details
    img.setAttribute('src', company.logo);
    img.setAttribute('alt', `Logo of ${company.name}`);
    img.setAttribute('loading', 'lazy');

    // Change h2 attributes
    h2.setAttribute('style', 'display: none;');

    h2.textContent = `${company.name}`;
    tradeHours.textContent = `${company.open}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    site.textContent = `${company.website}`;
   
    // Add/append the section(card) with the h2 element
    card.setAttribute('class', "info-container");
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(tradeHours);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(site);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

function listView() {
    let info = document.querySelector('div.cards');
    info.style.display = "flex";
    info.style.flexDirection = "column";

    let infoContainer = document.getElementsByClassName('info-container');
    for (let i = 0; i < infoContainer.length; i++) {
        infoContainer[i].style.display = "flex";
        infoContainer[i].style.flexDirection = "row";
        infoContainer[i].style.justifyContent = "center";
        infoContainer[i].style.alignItems = "center";
        infoContainer[i].style.boxShadow = "0px 0px #000000";

        if (i % 2 === 0) {
            infoContainer[i].style.backgroundColor = "#C5FCF9";
        }
    }
    
    let image = document.getElementsByTagName('img');
    console.log(image);
    for (let i = 3; i < image.length - 1; i++) {
      image[i].style.display = "none";
    }

    let name = document.getElementsByTagName('h2');
    for (let i = 0; i < name.length; i++) {
        name[i].style.display = "block";
    }
    
    let smallScreen = window.matchMedia("(max-width: 560px)");
    if (smallScreen.matches) {
        console.log("Small screen");    
        let infoContainer = document.getElementsByClassName('info-Container');
        for (let i = 0; i < infoContainer.length; i++) {
            infoContainer[i].style.display = "flex";
            infoContainer[i].style.flexDirection = "column"; 
        }
    }
    else {
        console.log("Large screen");
        let infoContainer = document.getElementsByClassName('info-Container');
        for (let i = 0; i < infoContainer.length; i++) {
            infoContainer[i].style.display = "flex";
            infoContainer[i].style.flexDirection = "row";
        }
    }
}

function cardView() {
    let info = document.querySelector('div.cards');
    info.style.display = "grid";

    let infoContainer = document.getElementsByClassName('info-Container');
    console.log(infoContainer);
    for (let i = 0; i < infoContainer.length; i++) {
        infoContainer[i].style.backgroundColor = "white";
        infoContainer[i].style.display = "block";
        infoContainer[i].style.boxShadow = "5px 5px #000000";
    }

    let image = document.getElementsByTagName('img');
    console.log(image);
    for (let i = 4; i < image.length; i++) {
        image[i].style.display = "block";
        image[i].style.margin = "10px auto 0 auto";
    }

    let name = document.getElementsByTagName('h2');
    for (let i = 0; i < name.length; i++) {
        name[i].style.display = "block";
    }
}

let smallScreen = window.matchMedia("(max-width: 560px)");

function smallScreenList() {
    if (smallScreen.matches) {
        console.log("Small screen");    
        let infoContainer = document.getElementsByClassName('info-Container');
        for (let i = 0; i < infoContainer.length; i++) {
            infoContainer[i].style.display = "flex";
            infoContainer[i].style.flexDirection = "column";
        }
    }
}
smallScreen.addEventListener("change", smallScreenList);

let buttonListView = document.querySelector('#list');
buttonListView.addEventListener("click", listView);

let buttonCardView = document.querySelector('#card');
buttonCardView.addEventListener("click", cardView);