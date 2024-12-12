document.getElementById('changeText').addEventListener('click', function() {
    const displayText = document.getElementById('display-text');
    displayText.textContent = 'Hello! You clicked the button!';
});

// Counter functionality
let count = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('increment').addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById('decrement').addEventListener('click', function() {
    count--;
    counterDisplay.textContent = count;
});

// Color changer functionality
document.getElementById('colorChange').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Greeting functionality
document.getElementById('greet').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingText = document.getElementById('greetingText');
    
    if (name.trim() !== '') {
        greetingText.textContent = `Hello, ${name}! Welcome to our site!`;
    } else {
        greetingText.textContent = 'Please enter your name!';
    }
});
