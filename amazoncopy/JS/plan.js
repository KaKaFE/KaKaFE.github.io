const radio = document.querySelector('input[type="radio"]');
const planBG = document.querySelector('.plan-card-bg')
console.log(radio)
console.log(planBG)
radio.addEventListener('focus', e => {
    planBG.style.background = 'red';
})

radio.addEventListener('blur', e => {
    planBG.style.background = 'red';
})
