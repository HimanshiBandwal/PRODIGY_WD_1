window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "#111";
  } else {
    navbar.style.backgroundColor = "#333";
  }
}

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbarLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});