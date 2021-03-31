import './assets/scss/app.scss';
import "./assets/images/slide01.png";
import "./assets/images/slide02.png";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');
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