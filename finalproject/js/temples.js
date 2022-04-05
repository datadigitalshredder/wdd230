// JSON (Temple Page)
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";
console.log(templeUrl)
fetch(templeUrl)
    .then((response) => response.json())

    .then((jsObject) => {

            //Randomly select 1st temple
            let templeDetails1 = jsObject.temples;
            let randomTempleDetails1 = templeDetails1[Math.floor(Math.random() * templeDetails1.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails1.length; i++){
                
                const iconsrcdetailed1 = `${randomTempleDetails1.photo}`;
                const descdetailed1 = `Photo of ${randomTempleDetails1.name}`;
            
            document.querySelector('#random-name').innerHTML = randomTempleDetails1.name;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed1);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed1);
            document.querySelector('#random-address').innerHTML = randomTempleDetails1.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails1.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails1.history;
            };
            //Randomly select 2nd temple
            let templeDetails2 = jsObject.temples;
            let randomTempleDetails2 = templeDetails2[Math.floor(Math.random() * templeDetails2.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails2.length; i++){
                
                const iconsrcdetailed2 = `${randomTempleDetails2.photo}`;
                const descdetailed2 = `Photo of ${randomTempleDetails2.name}`;
            
            document.querySelector('#random-name').innerHTML = randomTempleDetails2.name;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed2);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed2);
            document.querySelector('#random-address').innerHTML = randomTempleDetails2.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails2.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails2.history;
            };
            //Randomly select 3rd temple
            let templeDetails3 = jsObject.temples;
            let randomTempleDetails3 = templeDetails3[Math.floor(Math.random() * templeDetails3.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails3.length; i++){
                
                const iconsrcdetailed3 = `${randomTempleDetails3.photo}`;
                const descdetailed3 = `Photo of ${randomTempleDetails3.name}`;
            
            document.querySelector('#random-name').innerHTML = randomTempleDetails3.name;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed3);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed3);
            document.querySelector('#random-address').innerHTML = randomTempleDetails3.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails3.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails3.history;
            };
            //Randomly select 4th temple
            let templeDetails4 = jsObject.temples;
            let randomTempleDetails4 = templeDetails4[Math.floor(Math.random() * templeDetails4.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            for (let i = 0; i < templeDetails4.length; i++){
                
                const iconsrcdetailed4 = `${randomTempleDetails4.photo}`;
                const descdetailed4 = `Photo of ${randomTempleDetails4.name}`;
            
            document.querySelector('#random-name').innerHTML = randomTempleDetails4.name;
            document.querySelector('#random-temple').setAttribute('src', iconsrcdetailed4);
            document.querySelector('#random-temple').setAttribute('alt', descdetailed4);
            document.querySelector('#random-address').innerHTML = randomTempleDetails4.address;
            document.querySelector('#random-telephone').innerHTML = randomTempleDetails4.telephone;
            document.querySelector('#random-history').innerHTML = randomTempleDetails4.history;
            };
    });
