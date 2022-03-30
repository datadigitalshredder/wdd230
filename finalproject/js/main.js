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

// Retrieve a random temple
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";

fetch(templeUrl)
    .then((response) => response.json())

    .then((jsObject) => {
            // Randomly select temple
            let temple =  jsObject.temples;

            for (let i = 0; i < temple.length; i++){

            randomTemple = temple[Math.floor(Math.random() * temple.length)];
            console.log(randomTemple);
            const iconsrc = `${randomTemple.photo}`;
            const desc = `Photo of ${randomTemple.name}`;
            document.querySelector('#home-image').setAttribute('src', iconsrc);
            document.querySelector('#home-image').setAttribute('alt', desc);
            };
    });