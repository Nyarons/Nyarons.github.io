let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// change the image and h1 when click
myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/madeline.jpg');
        myHeading.textContent = 'Madeline is cute!';
    } else {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
        myHeading.textContent = 'My fox is adorable!';
    }
}

// personalize user when button was click
function setUserName() {
    let myName = prompt("Enter your name.");
    if (!myName || myName === null) setUserName();
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
}