document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove 'active' class from all items
      navItems.forEach(navItem => navItem.classList.remove('active'));

      // Add 'active' class to the clicked item
      this.classList.add('active');
    });
  });
});

let currentSlide = 0;
let sliderContainer;
let sliderInner;
let slides;

function showSlide() {
  const translateValue = (currentSlide === 0 ? 0 : -108) + '%';
  sliderInner.style.transform = `translateX(${translateValue})`;
}

function changeSlide() {
  currentSlide += 1;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide();
}

function autoSlide(interval) {
  setInterval(function () {
    changeSlide();
  }, interval);
}

function createCarousel(containerId, interval) {
  sliderContainer = document.getElementById(containerId);
  sliderInner = sliderContainer.querySelector('.slider-inner');
  slides = sliderInner.querySelectorAll('.slider-img');

  // Показати першу фотографію при завантаженні сторінки
  showSlide();

  // Автоматична зміна слайдів
  autoSlide(interval);
}

// Викликати функцію для створення автоматичної каруселі
createCarousel('slider1', 3000);

function showSkills(element) {
  var title = element.querySelector(".skill-box-title");
  title.style.opacity = "1";
}


function hideSkills(element) {
  var title = element.querySelector(".skill-box-title");
  title.style.opacity = "0";
}

function calculateTotal() {
  const rows = document.querySelectorAll('.service-row');
  let grandTotal = 0;

  rows.forEach(row => {
      const pricePerHour = parseFloat(row.children[1].innerText);
      const hoursInput = row.querySelector('.hours-input');

      const hours = parseFloat(hoursInput.value) || 0;
      const total = pricePerHour * hours;
      grandTotal += total;
  });

  document.getElementById('grandTotal').textContent = grandTotal.toFixed(2) + '$';
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section && sectionId == 'about') {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  } else {
    window.scrollTo({
      top: section.offsetTop-150,
      behavior: 'smooth'
  });
  }
}