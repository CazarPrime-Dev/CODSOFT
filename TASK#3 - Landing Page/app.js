const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('active');
      } else {
        navbar.classList.remove('active');
      }
    });