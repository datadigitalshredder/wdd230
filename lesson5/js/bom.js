// Book of Mormon - Top 25

// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function. 
button.addEventListener('click', function() {

    // In the function block for adding a chapter, make sure the input is not blank
    let myChapter = input.value;
        input.value = '';
    
    // if not, do the following:
    // create an li element
    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    // create a delete button
    const listBtn = document.createElement('button');

    // populate the li elements textContent or innerHTML with the input
    listChapter.appendChild(listText);
    listText.textContent = myChapter;

    // append the li element with the delete button
    listChapter.appendChild(listBtn);

    // populate the button textContent with an X
    listBtn.textContent = '❌';

    // append the list element with the li element just created and appended with text and the delete button
    list.appendChild(listChapter);

    // add an event listener to the delete button that removes the li element when clicked
    listBtn.onclick = function(e) {
        list.removeChild(listChapter);
      }

    // send the focus to the input element
    // clean up the successful add of a chapter by changing the input to nothing or the empty string and setting the focus to the input.
    input.focus();

});
