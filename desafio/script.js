var num = document.getElementById('txtn')
var lista = document.getElementById ('select')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
    }else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    } 
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0){
    window.alert('Adicione valores antes de finalizar"')
    }else {
        var tot = valores.length
        var menor = valores[0]
        var maior = valores[0]
        for (var pos in valores){
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)    
                menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>`

    }
}