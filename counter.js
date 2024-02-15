// increase, decrease, reset the count.

const count = document.querySelector('.count');
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const reset = document.querySelector('.reset');

let countValue = 0;

if (countValue < 0){
    count.style.color = 'red';
}

if (countValue > 0){
    count.style.color = 'green';
}

inc.addEventListener('click', () => {
    countValue++;
    updateCount();
})

dec.addEventListener('click', () =>{
    countValue--;
    updateCount();
})

reset.addEventListener('click', () => {
    countValue = 0;
    updateCount();
})

const updateCount = () => {
    count.textContent = countValue; 
}


