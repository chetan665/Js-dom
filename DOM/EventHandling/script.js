let p = document.querySelector('p');
p.addEventListener('click', function () {
  p.style.color = 'red';
  console.log('button succesffuly clicked');
});

p.removeEventListener('click', function () {
  console.log('deleted');
});

// Change Text on Button Click
let title = document.querySelector('#title');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  title.textContent = 'hello sachin';
});

// change the background color
let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function () {
  document.body.style.backgroundColor = 'yellow';
});

//add in list
let list = document.querySelector('#list');
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function () {
  let li = document.createElement('li');
  li.innerText = 'mango';
  list.append(li);
});

//remove paragraph

let text = document.querySelector('#text');
let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
  text.remove();
});

//toggle

let title1 = document.querySelector('#title1');
let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function () {
  if (title1.textContent == 'ON') {
    title1.textContent = 'OFF';
  } else {
    title1.textContent = 'ON';
  }
  title1.classList.toggle('off');
});
