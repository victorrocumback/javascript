var agora = new Date()
hora = agora.getHours()
minute = agora.getMinutes()

console.log(`Agora são ${hora}:${minute} `)

if (hora < 12) {
    console.log('Bom Dia!')
}else if ( hora < 18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}