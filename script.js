const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=> {
      //toggle nav
      nav.classList.toggle('nav-active');

      //animation of navlinks
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = ''
          } else {
            link.style.animation = `navlinkFade 0.5s ease forwards ${index / 8 + 0.5}s`;
          }
      });
      //burger animation
      burger.classList.toggle('toggle');
  });
}

navSlide();