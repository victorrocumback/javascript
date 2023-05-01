let family = {
    revenues: [1250, 55, 03, 34, 567],
    expenses: [3545 , 176, 23, 43, 60]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return console.log(total)

}

function calculateBalance(){
    const calculateIncomes = sum(family.revenues)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    if (total <= 0){
        console.log(`Você está fálido devendo ${total}`)
    }else {
        console.log(`Você está em dia seu saldo é ${total}`)
    }
}

//NÃO FUNCIONA ESSA MERDA


