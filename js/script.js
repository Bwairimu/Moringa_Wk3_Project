const navSlide= () => {
  const menu=document.querySelector('.menu');
  const nav=document.querySelector('.nav-link');
  const navLinks=document.querySelectorAll('.nav-link li');

  menu.addEventListener('click',() => {
      //Toggle nav
    nav.classList.toggle('.nav-active');
    //animate
    navLinks.forEach(nav-link, index); {
    if(link.style.animation) {
        link.style.animation='';
      } else {
        link.style.animation='navLinkFade 0.5s ease forwards';
      }
    };
    menu.classList.toggle('toggle');
  });
}
navSlide();

$(document).ready(function () {
    $("#show_hide").click(function () {
        $("#toggle_2,#toggle_1,#toggle_3").toggle({
            duration: 1500
        });
    });
});

