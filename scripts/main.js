// Dark mode automatic shift
if (new Date().getHours() > 13) {
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours() > 13) {
  const header = document.querySelector('header');
  header.style.color = 'black';
}

if (new Date().getHours() > 13) {
  const footer = document.querySelector('footer');
  footer.style.color = 'black';
}

if (new Date().getHours() > 13) {
  const mainBody = document.getElementsByClassName('main');
  mainBody [0].style.backgroundColor = 'black';
  mainBody [0].style.color = 'white';
