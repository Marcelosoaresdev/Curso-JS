let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//onsole.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

for ( let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posicao eh ${posicao} e tem o valor de ${valores[posicao]}`)
}
*/


for (let pos in valores) {
    console.log (`A posicao ${pos} tem o valor ${valores[pos]}`)
}

