let num = [5,2,6,100]

// for(var pos = 0; pos < num.length; pos++) {
//     console.log(num[pos])
// }

for(let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(5))
// console.log(`o vetor tem ${pos} posições`)