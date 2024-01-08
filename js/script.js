const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    btnMobile.addEventListener('touchstart', function(event){ 
        event.preventDefault()
        //decide o que a funcao vai fazer
    })

    /*
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    */

    const nav = document.getElementById('nav') // SE REFERE A TAG NAV
    nav.classList.toggle('active') // ADICIONA A CLASSE ACTIVE À NAV
    
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

// OQ FAZ O EVENTO 'CLICK' NO MOBILE? ELE EMULA UM EVENTO DE TOUCH PORÉM LEVA 300MS. PARA RESOLVER ISSO É POSSÍVEL ADICIONAR O EVENTO 'TOUCHSTART'. MAS QUANDO FAZEMOS ISSO CRIAMOS UM PROBLEMA: ASSIM QUE O USUÁRIO CLICA NO BOTÃO PELO MOBILE ATIVA O EVENTO TOUCHSTART E LOGO EM SEGUIDA ATIVA O CLICK, E ACABA FECHANDO O MENU. PARA ISSO CRIAMOS UMA CONDIÇÃO DENTRO DA FUNÇÃO

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)