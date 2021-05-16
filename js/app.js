const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger')
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('toggle');
    nav.classList.toggle("open")
});

