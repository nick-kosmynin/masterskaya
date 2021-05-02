/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/moduls/calc.js":
/*!*******************************!*\
  !*** ./src/js/moduls/calc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const  calc = (size, material, options, promocode, result) => {
       
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    
    let sum = 0; //переменная отвеч за сумму

    const clacFunc = () => {
        sum = Math.round((+sizeBlock.value) *(+materialBlock.value) +(+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum*0.7);
        } else{
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', clacFunc);
    materialBlock.addEventListener('change', clacFunc);
    optionsBlock.addEventListener('change', clacFunc);
    promocodeBlock.addEventListener('input', clacFunc);
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/moduls/filter.js":
/*!*********************************!*\
  !*** ./src/js/moduls/filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {

    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');

    // функция отвеч за фильтрацию элементов
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                no.classList.add('animated', 'fadeIn');
            });
        } else{
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => { // если используем делегирование событий всегда назначаем event
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/moduls/modal.js":
/*!********************************!*\
  !*** ./src/js/moduls/modal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = (btnOpenSelector, modalSekector, btnCloseSelector, destroy = false) => {

    let btnPressed = false; // переменная, кот следит нажата хоть какая то кнопка или нет

    // modal windows

    const modalTrigger = document.querySelectorAll(btnOpenSelector),
        modal = document.querySelector(modalSekector),
        modalCloseBtn = document.querySelector(btnCloseSelector);


    modalTrigger.forEach(item => { // УДАЛЕНИЕ ПОДАРКА
        item.addEventListener('click', () => {
            if (destroy) {
                item.remove();
            }
        });
    });

    btnPressed = true;

    modalTrigger.forEach(item => { // ОТКРЫТИЕ ОКНА
        item.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.classList.add('animated', 'fadeIn');
        });



    });

    function closeModal() { // ЗАКРЫТИЕ ОКНА
        modalCloseBtn.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('show');
        });
    }
    closeModal();

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
        }
    });

    function showModalTime(selector, time) { //функция показа модального окна через 6 сек
        setTimeout(function () {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block"; // переменная
                } // если модальное окно будет показано пользователю, то мод окна перезаписываются в то же значение
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block';
                // document.body.style.overflow = "hidden";
            } // если не одно мод окно не показано то  poup-consultation


        }, time);
    }

    

    function openByScroll(selector) {
        modal.addEventListener('scroll', () => {
            if (!btnPressed && (modal.pageYOffset + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    openByScroll('.fixed-gift');

    //showModalTime('.popup-consultation', 6000);
};
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/moduls/slider.js":
/*!*********************************!*\
  !*** ./src/js/moduls/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (sliders, dir, prev, next) => {
    //   СОЗДАНИЕ СЛАЙДЕРА


    // создаем селектор отображающий слайды, указать в какую сторону движется слайдер, кнопки prev & next

    let SlideIndex = 1, // переменная, отвечающая за показ текущ слайда польз
        paused = false;
    const items = document.querySelectorAll(sliders);




    function showSlides(n) { // cоздаем функцию отвечающую за перемещ индекса и слайда
        if (n > items.length) {
            SlideIndex = 1;
        }

        if (n < 1) {
            SlideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = 'none';
        });

        items[SlideIndex - 1].style.display = 'block';
    }

    showSlides(SlideIndex);

    function plusSlides(n) {
        showSlides(SlideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[SlideIndex - 1].classList.remove('slideInLeft');
            items[SlideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[SlideIndex - 1].classList.remove('slideInRight');
            items[SlideIndex - 1].classList.add('slideInLeft');
        });

    } catch (e) {}


    function activateAnimation() {
        if (dir === 'vertical') {
         paused=   setInterval(function () {
                plusSlides(1);
                items[SlideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
          paused=  setInterval(function () {
                plusSlides(1);
                items[SlideIndex - 1].classList.remove('slideInRight');
                items[SlideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();
    


    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });


};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/modal */ "./src/js/moduls/modal.js");
/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/slider */ "./src/js/moduls/slider.js");
/* harmony import */ var _moduls_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/calc */ "./src/js/moduls/calc.js");
/* harmony import */ var _moduls_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/filter */ "./src/js/moduls/filter.js");









window.addEventListener('DOMContentLoaded', () => {

  Object(_moduls_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_moduls_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');


  Object(_moduls_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-design', '.popup-design', '.popup-design .popup-close',);
  Object(_moduls_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.button-consultation', '.popup-consultation', '.popup-close',);
  Object(_moduls_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('.fixed-gift', '.popup-gift', '[data-close]', true);

  Object(_moduls_calc__WEBPACK_IMPORTED_MODULE_2__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  
 Object(_moduls_filter__WEBPACK_IMPORTED_MODULE_3__["default"])();

 




});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map