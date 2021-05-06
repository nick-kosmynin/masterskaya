
import modal from './moduls/modal';
import slider from './moduls/slider';
import calc from './moduls/calc';
import filter from './moduls/filter';
import picture from './moduls/picture';
import burger from './moduls/burger';
import accordeon from './moduls/accordeon';



window.addEventListener('DOMContentLoaded', () => {

  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');


  modal('.button-design', '.popup-design', '.popup-design .popup-close',);
  modal('.button-consultation', '.popup-consultation', '.popup-close',);
  modal('.fixed-gift', '.popup-gift', '[data-close]', true);

  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  
 filter();

 picture('.sizes-block');

 burger('.burger-menu', '.burger');

 accordeon('.accordion-heading', '.accordion-block');


});