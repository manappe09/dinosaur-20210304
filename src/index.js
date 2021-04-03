import './assets/scss/app.scss';
import './assets/js/nav';
import './assets/js/filter';
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
// // import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
  
// init Swiper:
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
   delay: 3000,
 },
});