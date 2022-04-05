// JSON (Temple Page)
const templeUrl = "https://datadigitalshredder.github.io/wdd230/finalproject/jsonfolder/templedata.json";
console.log(templeUrl)
fetch(templeUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const temples = jsonObject['temples'];
    
    temples.forEach(displayTemples); 
  });

  function displayTemples(temple) { // Create elements to add to the document
    let card = document.createElement('section'); 
    let h2 = document.createElement('h2');
    let name = document.createElement('p');
    // let birthPlace = document.createElement('p');
    let img = document.createElement('img');
    // let order = document.createElement(p);
    // switch (prophet.order) {
    //   case 1:
    //     order = `${prophet.order}st`;
    //     break;
    //   case 2:
    //     order = `${prophet.order}nd`;
    //     break;
    //   case 3:
    //     order = `${prophet.order}rd`;
    //     break;
    //   default:
    //     order = `${prophet.order}th`;
    //     break;
    // }
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${temple.name}`;
    name.textContent = `${temple.name}`;
    // birthPlace.textContent =`Birth Place: ${prophet.birthplace}`;
    img.setAttribute('src', temple.photo);
    img.setAttribute('alt', `Photo of ${temple.name}`);
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(name);
    // card.appendChild(birthPlace);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }