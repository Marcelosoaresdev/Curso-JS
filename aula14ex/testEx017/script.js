function calcular() {
    let num = window.document.getElementById('txtnum')
    let tabela = document.getElementById('txttab')
    if (num.value.length == 0) {
        alert('Digite um número!')
    } else {
        let n = Number(num.value)
        tabela.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            tabela.appendChild(item)
            item.text = `${n} x ${c} = ${n * c}`
        }
    }
}   