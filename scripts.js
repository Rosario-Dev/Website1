var header = document.getElementById('header');

window.addEventListener('scroll', ()=> {

    var scroll = window.scrollY

    if (scroll>10) {
        header.style.backgroundColor = '#121212'
    }
})