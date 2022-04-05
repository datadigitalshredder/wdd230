// JSON (Temple Page)
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";
console.log(templeUrl)
fetch(templeUrl)
    .then((response) => response.json())

    .then((jsObject) => {

            //Randomly select a temple to share details
            let templeDetails = jsObject.temples;
            let randomTempleDetails = templeDetails[Math.floor(Math.random() * templeDetails.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails.length; i++){
                
                const iconsrcdetailed = `${randomTempleDetails.photo}`;
                const descdetailed = `Photo of ${randomTempleDetails.name}`;
            
            // const cityId = randomTempleDetails.cityID;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed);
            document.querySelector('#random-name').innerHTML = randomTempleDetails.name;
            document.querySelector('#random-address').innerHTML = randomTempleDetails.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails.history;
            };
    });
