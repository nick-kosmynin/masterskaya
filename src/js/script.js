
import modal from './moduls/modal';
import slider from './moduls/slider';
import calc from './moduls/calc';
import filter from './moduls/filter';




window.addEventListener('DOMContentLoaded', () => {

  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');


  modal('.button-design', '.popup-design', '.popup-design .popup-close',);
  modal('.button-consultation', '.popup-consultation', '.popup-close',);
  modal('.fixed-gift', '.popup-gift', '[data-close]', true);

  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  
 filter();

 




});