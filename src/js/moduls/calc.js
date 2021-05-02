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

export default calc;