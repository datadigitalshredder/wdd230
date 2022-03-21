const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    
    prophets.forEach(displayProphets); 
  });

function displayProphets(prophet) { // Create elements to add to the document
    let card = document.createElement('section'); 
    let h2 = document.createElement('h2');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    let img = document.createElement('img');
    let order = ``;
    switch (prophet.order) {
      case 1:
        order = `${prophet.order}st`;
        break;
      case 2:
        order = `${prophet.order}nd`;
        break;
      case 3:
        order = `${prophet.order}rd`;
        break;
      default:
        order = `${prophet.order}th`;
        break;
    }
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
    birthPlace.textContent =`Birth Place: ${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `Potrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President `);
    
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(img);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }