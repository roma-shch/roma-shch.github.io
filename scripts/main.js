/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Здарова Бандиты';

let pereMennaya = 'Kek';
pereMennaya = 'Kuk';

alert('hello!');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

 document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/tasty-watermelon.jpg') {
    myImage.setAttribute ('src','images/tasty-watermelon-2.jpg');
  }
  else {
    myImage.setAttribute ('src','images/tasty-watermelon.jpg')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName () {
  var myName = prompt('ВВедите имя любителя пицца-арбузов')
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Привет любитель пицца-арбузов,' + myName + '!!!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem ('name');
  myHeading.textContent = 'Привет любитель пицца-арбузов,' + storedName + '!!!';
}

myButton.onclick = function() {
  setUserName();
}
