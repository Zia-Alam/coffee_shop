let menu = document.querySelector('.nav_bar');

document.querySelector('#burger').addEventListener('click',
function() {  menu.classList.toggle('active');
});


let cart = document.querySelector('.cart');

document.querySelector('#trolly').addEventListener('click',
function() {  cart.classList.toggle('active');
});
