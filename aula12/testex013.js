var mesAtual = new Date()
var meses = mesAtual.getMonth ()

/* 
0 = Janeiro
1 = Fevereiro
2 = Março
3 = Abril
4 = Maio
5 = Junho
6 = Julho 
7 = Agosto
8 = Setembro
9 = Outubro
10 = Novembro
11 = Dezembro
*/

switch(meses){
    case 0:
        console.log('Estamos em Janeiro')
        break
    case 1:
        console.log('Estamos em Fevereiro')
        break
    case 2:
        console.log('Estamos em Março')
        break
    case 3:
        console.log('Estamos em Abril')
        break
    case 4:
        console.log('Estamos em Maio')
        break
    case 5:
        console.log('Estamos em Junho')
        break
    case 6:
        console.log('Estamos em Julho')
        break
    case 7:
        console.log('Estamos em Agosto')
        break
    case 8:
        console.log('Estamos em Setembro')
        break
    case 9:
        console.log('Estamos em Outubro')
        break
    case 10:
        console.log('Estamos em Novembro')
        break
    case 11:
        console.log('Estamos em Dezembro')
        break
    default:
        console.log(`[ERRO] Número ${meses} de meses é inválido!`)
        console.log('O Número de meses vai de 0 a 11 ( Com o 0 inciando em Janeiro )')
        break
    }