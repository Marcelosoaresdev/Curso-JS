let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()
let ele = num.indexOf(4)

for (let pos in num) {
    console.log(` No índice ${pos} e o valor eh ${num[pos]} `)
}
console.log(`A estrutura do Array/Vetor eh ${num} e tem ${num.length} itens`)




/*
if ( ele == -1 ) {
    console.log(' Nao foi encontrado o elemento ')
} else {
    console.log (` No índice ${ele} esta o valor ${num[ele]} `) 
}
console.log(num)
*/
