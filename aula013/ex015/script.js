function verificar () {
    var data = new Date()    
    var ano = data.getFullYear()
    
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
    
        if (fsex[0].checked) {
            genero = 'Homem'
        
            if (idade >= 0 && idade < 6 ) {
                // BEBê
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 13) {
                // CRIANÇA
                img.setAttribute('src', 'crianca-m.jpg')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-m.jpg')
            }else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'adulto-m.jpg')
            }else {
                // IDOSO
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 6 ) {
                // BEBÊ
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 13) {
                // CRIANÇA
                img.setAttribute('src', 'crianca-f.jpg')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovem-f.jpg')
            }else if (idade < 60) {
                // ADULTO
                img.setAttribute('src', 'adulto-f.jpg')
            }else {
                // IDOSO
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} e com ${idade} anos de idade!`;
        res.appendChild(img);
    }
    
}