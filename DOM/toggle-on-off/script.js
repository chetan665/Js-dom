let status = document.querySelector('#status');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  if (status.innerText === 'OFF') {
    status.innerText = 'ON';
  } else {
    status.innerText = 'OFF';
  }

  document.body.classList.toggle('on'); // change the css
});
