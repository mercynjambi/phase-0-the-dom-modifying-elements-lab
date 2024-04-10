// Remove the <main> with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new <h1> element and assign it to the variable newHeader
const newHeader = document.createElement('h1');

// Set the id of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element to "YOUR-NAME is the champion"
newHeader.textContent = " Njambi is the champion"; // Replace YOUR-NAME with your desired text
