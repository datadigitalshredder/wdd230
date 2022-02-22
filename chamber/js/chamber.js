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
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
weekDay = now.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (weekDay >= 1 && weekDay <= 2) {
    message = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.!';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
   message = '🤝🏼 Come join us NEXT WEEK Wednesday at 7:00 p.m. for the chamber meet and greet!';
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

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1. PRINTS WHETHER IT'S WEEKEND OR NOT
document.querySelector('#message').textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message1. PRINTS DAY OF WEEK
// document.querySelector('#message2').textContent = message1;

// The hamburger button
function toggleMenu (){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');

}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// The message functionality
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
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);