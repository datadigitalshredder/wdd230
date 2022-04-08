// WORKING WITH SUITES DATA
const suitesURL = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/services.json";
fetch(suitesURL)
    .then((response3) => response3.json())

    .then((jsObject3) => {

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

            document.querySelector('#random-suite1').setAttribute('src', iconsrcSuites1);
            document.querySelector('#random-suite1').setAttribute('alt', descSuites1);
            document.querySelector('#random-suite1-name').innerHTML = randomSuitesDetails1.name;

            document.querySelector('#random-suite2').setAttribute('src', iconsrcSuites2);
            document.querySelector('#random-suite2').setAttribute('alt', descSuites2);
            document.querySelector('#random-suite2-name').innerHTML = randomSuitesDetails2.name;

            document.querySelector('#random-suite3').setAttribute('src', iconsrcSuites3);
            document.querySelector('#random-suite3').setAttribute('alt', descSuites3);
            document.querySelector('#random-suite3-name').innerHTML = randomSuitesDetails3.name;

            };
            };
            };
        });
