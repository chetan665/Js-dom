let main = document.querySelector('.main');

main.addEventListener('mouseover', function (a) {
  main.style.backgroundColor = 'yellow';
  // console.log(a);
});

main.addEventListener('mouseout', function () {
  main.style.backgroundColor = 'red';
});

// move box
window.addEventListener('mousemove', function (e) {
  console.log(e.clientX, e.clientY);
  main.style.top = e.clientY + 'px';
  main.style.left = e.clientX + 'px';
});
