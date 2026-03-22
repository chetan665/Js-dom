let input = document.querySelector('input');
input.addEventListener('input', function (data) {
  if (data.data !== null) {
    console.log(data.data);
  }
});

let select = document.querySelector('select');
let h3 = document.querySelector('h3');
select.addEventListener('change', function (data) {
  // h3.textContent = data.target.value + 'device selected';
  h3.textContent = `${data.target.value} device selected`;
  console.log(data.target.value);
});

let name = document.querySelector('#name');
name.addEventListener('keypress', function (data) {
  console.log(data);
  if (data.key === ' ') {
    console.log('space');
    name.textContent = 'spc';
  } else {
    console.log(data.key);
  }
});
