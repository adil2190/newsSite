const toggleBtn = document.querySelector('.toggle-button');
const navLinks = document.querySelectorAll('.nav-items');

toggleBtn.addEventListener('click', e=> {
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].classList.toggle('active');
        navLinks[i].style.transition = 'all ease-in 250ms';
    }
})