// this is for loop test
for (let x = 0; x < 10; x++) {
    // console.log(x * 10);
}

// if test
let num = 12;
if (num > 20) {
    console.log('num is bigger');
} else {
    console.log('num is smaller');
}

// this is for creat functions

function showNum(a, b) {
    return `sum of ${a} and ${b} is : ${a + b}`;
}

console.log(showNum(10, 22));

// this function is for change show modal
function showModal() {
    let modalBox = document.querySelector('.modalBox');
    modalBox.classList.toggle('modalBox-animated');
}
let btn = document.querySelector('.btnClick');

btn.addEventListener('click', () => {
    showModal();
});

console.log('monaaaaaaa');
