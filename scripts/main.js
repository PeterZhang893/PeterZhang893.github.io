let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rayla-official.png') {
      myImage.setAttribute('src', 'images/humanrayla.jpg');
    } else {
      myImage.setAttribute('src', 'images/rayla-official.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Rayla is the coolest hero，' + myName + '!';
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Rayla is the coolest hero，' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
 }

 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Rayla is the coolest hero，' + myName + '!';
    }
  }

