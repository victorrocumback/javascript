function carregar() {
    var imagem = window.document.getElementById('foto')
    var texto = window.document.getElementById('msg')
    var saudacao = window.document.getElementById('saudacao')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    texto.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'morning1.jpg'
        document.body.style.background = '#dca69c'
        saudacao.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora < 18){
        imagem.src = 'afternoon1.jpg'
        document.body.style.background = '#2451d2'
        saudacao.innerHTML = 'Boa Tarde!'
    }else {
        imagem.src = 'night.jpg'
        document.body.style.background = '#040c1f'
        saudacao.innerHTML = 'Boa Noite!'
    }
}