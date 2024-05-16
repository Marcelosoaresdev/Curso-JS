let n = [5, 8, 9, 2, 3]
n[5] = 6
n.push(1)
n.sort()
for (let posicao in n) {
    console.log(`A posicao eh ${posicao} e os valor dentro dela eh  ${n[posicao]}`)
}
console.log(n)
console.log (n.indexOf(7))
console.log(n.length)