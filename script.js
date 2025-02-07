// JavaScript for mobile menu toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});





document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  // Get buttons
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  
  // Update the slide based on the current index
  function updateSlide() {
    const offset = -100 * currentIndex;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
  }
  
  // Go to the next slide
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });
  
  // Go to the previous slide
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
});
