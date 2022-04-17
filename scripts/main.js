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
  const navbarBody = document.getElementsByClassName('navbar');
  navbarBody[0].style.backgroundColor = 'black';
  navbarBody[0].style.color = 'white';
}

// if (new Date().getHours() > 13) {
//  const footer = document.querySelector('footer');
//  footer.style.backgroundColor = 'black';
// }

// if (new Date().getHours() > 13) {
// const imagesFooter = document.getElementsByClassName('images');
//  imagesFooter[0].style.border = '7px solid white';
//  imagesFooter[0].style.box-shadow = '7px 7px black';
// }

if (new Date().getHours() > 13) {
  const mainBody = document.getElementsByClassName('main');
  mainBody[0].style.backgroundColor = 'black';
  mainBody[0].style.color = 'white';
}
