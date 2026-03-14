let h1 = document.querySelector('h1');
window.addEventListener('keydown', function (data) {
  h1.innerText = data.key;
  // console.log(data);
  if (data.key === ' ') {
    h1.innerText = 'Space';
    console.log('space');
  } else {
    console.log(data.key);
  }
});
