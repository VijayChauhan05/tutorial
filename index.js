const navbar= document.querySelector('.navbar');
const menu= document.querySelector('.menu');
const cross= document.querySelector('.close');
menu.addEventListener('click',()=>{
       navbar.classList.add('active');
})
cross.addEventListener('click',()=>{
       navbar.classList.remove('active');
})
