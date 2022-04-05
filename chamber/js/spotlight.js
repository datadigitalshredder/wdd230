const spotlightUrl = "https://datadigitalshredder.github.io/wdd230/chamber/jsonfolder/data.json";

fetch(spotlightUrl)
    .then((response) => response.json())

    .then((jsObject1) => {
            // Randomly select 1st company with gold membership
            let outputGold =  jsObject1.companies.filter(membership => membership.membership === "gold");

            for (let i = 0; i < outputGold.length; i++){

            randomCompanyGold = outputGold[Math.floor(Math.random() * outputGold.length)];
            document.querySelector('#gold-name').innerHTML = randomCompanyGold.name;
            const iconsrc = `${randomCompanyGold.logo}`;
            const desc = `Logo of ${randomCompanyGold.name}`;
            document.querySelector('#gold-image').setAttribute('src', iconsrc);
            document.querySelector('#gold-image').setAttribute('alt', desc);
            document.querySelector('#gold-number').innerHTML = randomCompanyGold.phone;
            document.querySelector('#gold-site').innerHTML = randomCompanyGold.website;

            // Randomly select 2nd company with gold membership
            let outputGold2 =  jsObject1.companies.filter(membership2 => membership2.membership === "gold");

            for (let i = 0; i < outputGold2.length; i++){

            randomCompanyGold2 = outputGold2[Math.floor(Math.random() * outputGold2.length)];
            document.querySelector('#gold-name2').innerHTML = randomCompanyGold2.name;
            const iconsrc2 = `${randomCompanyGold2.logo}`;
            const desc2 = `Logo of ${randomCompanyGold2.name}`;
            document.querySelector('#gold-image2').setAttribute('src', iconsrc2);
            document.querySelector('#gold-image2').setAttribute('alt', desc2);
            document.querySelector('#gold-number2').innerHTML = randomCompanyGold2.phone;
            document.querySelector('#gold-site2').innerHTML = randomCompanyGold2.website;
            };

            // Randomly select company with silver membership
            let outputSilver =  jsObject1.companies.filter(membership3 => membership3.membership === "silver");

            for (let i = 0; i < outputSilver.length; i++){

            randomCompanySilver = outputSilver[Math.floor(Math.random() * outputSilver.length)];
            document.querySelector('#silver-name').innerHTML = randomCompanySilver.name;
            const iconsrc3 = `${randomCompanySilver.logo}`;
            const desc3 = `Logo of ${randomCompanySilver.name}`;
            document.querySelector('#silver-image').setAttribute('src', iconsrc3);
            document.querySelector('#silver-image').setAttribute('alt', desc3);
            document.querySelector('#silver-number').innerHTML = randomCompanySilver.phone;
            document.querySelector('#silver-site').innerHTML = randomCompanySilver.website;
            };
            };
    });