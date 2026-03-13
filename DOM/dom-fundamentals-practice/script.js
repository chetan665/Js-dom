// ==========================
// Change innerText / innerHTML
// ==========================

let p = document.querySelector('p');
p.innerHTML = '<i>hello priya</i>';
console.dir(p);

let h1 = document.querySelector('h1');
h1.innerText = 'bye';
console.dir(h1);

let title = document.querySelector('#title');
title.innerText = 'welcome sachin';
console.log(title);

let msg = document.querySelector('.msg');
msg.innerText = 'Learning DOM is fun';
console.log(msg);

// ==========================
// innerHTML examples
// ==========================

let box = document.querySelector('#box');
box.innerHTML = '<b>Important Message</b>';
console.log(box);

let container = document.querySelector('#container');
container.innerHTML = '<h2>New Heading</h2>';
console.log(container);

let btn = document.querySelector('#btn');
btn.innerText = 'Submit';
console.log(btn);

let card = document.querySelector('#card');
card.innerHTML = '<h3>Product</h3><p>Price: $10</p>';
console.log(card);

// ==========================
// textContent
// ==========================

let info = document.querySelector('#info');
console.log(info.textContent);

// ==========================
// Attribute Manipulation
// ==========================

let profile = document.querySelector('#profile');
profile.setAttribute('src', 'user2.png');
console.log(profile.getAttribute('src'));

let pic = document.querySelector('#pic');
pic.setAttribute('alt', 'cute cat');
console.log(pic);

let logo12 = document.querySelector('#logo12');
console.log(logo12);

logo12.removeAttribute('width');
console.log(logo12);

// ==========================
// Create Element
// ==========================

let newHeading = document.createElement('h1');
newHeading.innerText = 'Priya';

let div = document.querySelector('div');
div.appendChild(newHeading);

// ==========================
// Append example
// ==========================

let boxx = document.querySelector('#boxx');

let newParagraph = document.createElement('p');
newParagraph.innerText = 'hello';

boxx.append(newParagraph);
console.dir(boxx);

// ==========================
// Append inside box
// ==========================

let box2 = document.querySelector('#box');

let add = document.createElement('p');
add.innerText = 'hello world';

box2.append(add);

// ==========================
// Prepend example
// ==========================

let box1 = document.querySelector('#box1');

let p2 = document.createElement('p');
p2.innerText = 'first';

box1.prepend(p2);

console.log(box1);

// ==========================
// List manipulation
// ==========================

let list = document.querySelector('#list');

let li = document.createElement('li');
li.innerText = 'Mango';

list.prepend(li);

console.dir(list);

// ==========================
// classList manipulation
// ==========================

list.classList.add('hulu');

let boox = document.querySelector('#boox');
boox.classList.add('redBox');

let card2 = document.querySelector('#card2');
card2.classList.remove('dark');

let heading = document.querySelector('#heading');
heading.classList.toggle('big');

// ==========================
// Style manipulation
// ==========================

let firstHeading = document.querySelector('h1');
firstHeading.style.backgroundColor = 'yellow';

let title2 = document.querySelector('#title2');
title2.style.backgroundColor = 'blue';

let text = document.querySelector('#text');
if (text) {
  text.style.fontSize = '30px';
}
