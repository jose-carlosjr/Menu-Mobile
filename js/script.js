const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav') // SE REFERE A TAG NAV
    nav.classList.toggle('active') // ADICIONA A CLASSE ACTIVE À NAV
}

btnMobile.addEventListener('click', toggleMenu)