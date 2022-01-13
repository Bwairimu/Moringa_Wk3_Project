const navSlide= () => {
  const menu=document.querySelector('.menu');
  const nav=document.querySelector('.nav-link');
  const navLinks=document.querySelectorAll('.nav-link li');

  menu.addEventListener('click',() => {
      //Toggle nav
    nav.classList.toggle('.nav-active');
    //animate
    navLinks.forEach(link, index); {
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

$(document).ready(function(){
  $(".card").on("click",function(){
    $(".p-showing").toggle();
    $(".p-hidden").toggle();
  });
});

(function () {
    'use strict'
    var Forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.(callform);
      .forEach(function (Forms) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })

  })()

