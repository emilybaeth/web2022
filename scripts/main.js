// Dark mode automatic shift
if (new Date().getHours() > 13) {
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}
