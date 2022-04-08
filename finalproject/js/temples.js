// JSON (Temple Page)
const templeUrl1 = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";
console.log(templeUrl1)
fetch(templeUrl1)
    .then((response) => response.json())

    .then((jsObject) => {

            //Randomly select 1st temple
            let templeDetails1 = jsObject.temples[0];
            // let randomTempleDetails1 = templeDetails1[Math.floor(Math.random() * templeDetails1.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails1.length; i++){
                
            const iconsrcdetailed1 = `${templeDetails1.photo}`;
            const descdetailed1 = `Photo of ${templeDetails1.name}`;
            
            document.querySelector('#random-name1').innerHTML = templeDetails1.name;
            document.querySelector('#random-temple1').setAttribute('src', iconsrcdetailed1);
            document.querySelector('#random-temple1').setAttribute('alt', descdetailed1);
            document.querySelector('#random-address1').innerHTML = templeDetails1.address;
            document.querySelector('#random-telephone1').innerHTML = templeDetails1.telephone;
            document.querySelector('#random-services1').innerHTML = templeDetails1.services;
            document.querySelector('#random-floorarea1').innerHTML = templeDetails1.floorarea;
            document.querySelector('#random-ordinances1').innerHTML = templeDetails1.ordschedule;
            document.querySelector('#random-session1').innerHTML = templeDetails1.sessionschedule;
            document.querySelector('#random-dates1').innerHTML = templeDetails1.closuredates;
            document.querySelector('#random-history1').innerHTML = templeDetails1.history;
            // };
            //Randomly select 2nd temple
            let templeDetails2 = jsObject.temples[2];
            // let randomTempleDetails2 = templeDetails2[Math.floor(Math.random() * templeDetails2.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails2.length; i++){
                
                const iconsrcdetailed2 = `${templeDetails2.photo}`;
                const descdetailed2 = `Photo of ${templeDetails2.name}`;
            
            document.querySelector('#random-name2').innerHTML = templeDetails2.name;
            document.querySelector('#random-temple2').setAttribute('src', iconsrcdetailed2);
            document.querySelector('#random-temple2').setAttribute('alt', descdetailed2);
            document.querySelector('#random-address2').innerHTML = templeDetails2.address;
            document.querySelector('#random-telephone2').innerHTML = templeDetails2.telephone;
            document.querySelector('#random-services2').innerHTML = templeDetails2.services;
            document.querySelector('#random-floorarea2').innerHTML = templeDetails2.floorarea;
            document.querySelector('#random-ordinances2').innerHTML = templeDetails2.ordschedule;
            document.querySelector('#random-session2').innerHTML = templeDetails2.sessionschedule;
            document.querySelector('#random-dates2').innerHTML = templeDetails2.closuredates;
            document.querySelector('#random-history2').innerHTML = templeDetails2.history;
            // };
            //Randomly select 3rd temple
            let templeDetails3 = jsObject.temples[7];
            // let randomTempleDetails3 = templeDetails3[Math.floor(Math.random() * templeDetails3.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails3.length; i++){
                
            const iconsrcdetailed3 = `${templeDetails3.photo}`;
            const descdetailed3 = `Photo of ${templeDetails3.name}`;
            
            document.querySelector('#random-name3').innerHTML = templeDetails3.name;
            document.querySelector('#random-temple3').setAttribute('src', iconsrcdetailed3);
            document.querySelector('#random-temple3').setAttribute('alt', descdetailed3);
            document.querySelector('#random-address3').innerHTML = templeDetails3.address;
            document.querySelector('#random-telephone3').innerHTML = templeDetails3.telephone;
            document.querySelector('#random-services3').innerHTML = templeDetails3.services;
            document.querySelector('#random-floorarea3').innerHTML = templeDetails3.floorarea;
            document.querySelector('#random-ordinances3').innerHTML = templeDetails3.ordschedule;
            document.querySelector('#random-session3').innerHTML = templeDetails3.sessionschedule;
            document.querySelector('#random-dates3').innerHTML = templeDetails3.closuredates;
            document.querySelector('#random-history3').innerHTML = templeDetails3.history;
            // };
            //Randomly select 4th temple
            let templeDetails4 = jsObject.temples[8];
            // let randomTempleDetails4 = templeDetails4[Math.floor(Math.random() * templeDetails4.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails4.length; i++){
                
            const iconsrcdetailed4 = `${templeDetails4.photo}`;
            const descdetailed4 = `Photo of ${templeDetails4.name}`;
            
            document.querySelector('#random-name4').innerHTML = templeDetails4.name;
            document.querySelector('#random-temple4').setAttribute('src', iconsrcdetailed4);
            document.querySelector('#random-temple4').setAttribute('alt', descdetailed4);
            document.querySelector('#random-address4').innerHTML = templeDetails4.address;
            document.querySelector('#random-telephone4').innerHTML = templeDetails4.telephone;
            document.querySelector('#random-services4').innerHTML = templeDetails4.services;
            document.querySelector('#random-floorarea4').innerHTML = templeDetails4.floorarea;
            document.querySelector('#random-ordinances4').innerHTML = templeDetails4.ordschedule;
            document.querySelector('#random-session4').innerHTML = templeDetails4.sessionschedule;
            document.querySelector('#random-dates4').innerHTML = templeDetails4.closuredates;
            document.querySelector('#random-history4').innerHTML = templeDetails4.history;

            //Randomly select 5th temple
            let templeDetails5 = jsObject.temples[10];
            // let randomTempleDetails4 = templeDetails4[Math.floor(Math.random() * templeDetails4.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails4.length; i++){
                
            const iconsrcdetailed5 = `${templeDetails5.photo}`;
            const descdetailed5 = `Photo of ${templeDetails5.name}`;
            
            document.querySelector('#random-name5').innerHTML = templeDetails5.name;
            document.querySelector('#random-temple5').setAttribute('src', iconsrcdetailed5);
            document.querySelector('#random-temple5').setAttribute('alt', descdetailed5);
            document.querySelector('#random-address5').innerHTML = templeDetails5.address;
            document.querySelector('#random-telephone5').innerHTML = templeDetails5.telephone;
            document.querySelector('#random-services5').innerHTML = templeDetails5.services;
            document.querySelector('#random-floorarea5').innerHTML = templeDetails5.floorarea;
            document.querySelector('#random-ordinances5').innerHTML = templeDetails5.ordschedule;
            document.querySelector('#random-session5').innerHTML = templeDetails5.sessionschedule;
            document.querySelector('#random-dates5').innerHTML = templeDetails5.closuredates;
            document.querySelector('#random-history5').innerHTML = templeDetails5.history;

            //Randomly select 6th temple
            let templeDetails6 = jsObject.temples[12];
            // let randomTempleDetails4 = templeDetails4[Math.floor(Math.random() * templeDetails4.length)]; // Place this random selection variable outisde the for loop, unlike in the loop above, otherwise the randomly selected city weather might not match the city you want.
            // for (let i = 0; i < templeDetails4.length; i++){
                
            const iconsrcdetailed6 = `${templeDetails6.photo}`;
            const descdetailed6 = `Photo of ${templeDetails6.name}`;
            
            document.querySelector('#random-name6').innerHTML = templeDetails6.name;
            document.querySelector('#random-temple6').setAttribute('src', iconsrcdetailed6);
            document.querySelector('#random-temple6').setAttribute('alt', descdetailed6);
            document.querySelector('#random-address6').innerHTML = templeDetails6.address;
            document.querySelector('#random-telephone6').innerHTML = templeDetails6.telephone;
            document.querySelector('#random-services6').innerHTML = templeDetails6.services;
            document.querySelector('#random-floorarea6').innerHTML = templeDetails6.floorarea;
            document.querySelector('#random-ordinances6').innerHTML = templeDetails6.ordschedule;
            document.querySelector('#random-session6').innerHTML = templeDetails6.sessionschedule;
            document.querySelector('#random-dates6').innerHTML = templeDetails6.closuredates;
            document.querySelector('#random-history6').innerHTML = templeDetails6.history;
            // };
    });

// Get the modal Johannesburg temple
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let templeBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
templeBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Get the modal Mexico City temple
let modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
let templeBtn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
templeBtn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// Get the modal Chicago temple
let modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
let templeBtn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
let span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
templeBtn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// Get the modal Freiberg temple
let modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
let templeBtn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
let span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
templeBtn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}
// Get the modal Lisbon temple
let modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
let templeBtn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
let span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
templeBtn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// Get the modal Anchorage temple
let modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
let templeBtn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
let span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 
templeBtn6.onclick = function() {
  modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}