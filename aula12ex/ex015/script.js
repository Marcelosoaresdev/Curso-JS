function verificar ()
{
    var data = new Date()
    var ano = data.getFullYear()  // Ano atual
    var fano = document.getElementById('txtano') // Valor de ano que foi escrito 
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value < 0) {  /* se o comprimento de 'fano' tiver nada, for negativo ou ano for maior que o ano atual, ERRO. */
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else 
    {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)  // Calculando o ano atual - ano colocado na caixa (input), gerando 'idade'
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img') /* é a mesma coisa de ir no html e criar um <img>, só que direto no JS */
        img.setAttribute('id', 'foto')  /* é a mesma coisa de ir no html e colocar <img id='foto'>, só que direto no JS */
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANCA
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANCA
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' // Centralizando o texto 'res', como se fosse CSS, mas em JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Vai mostrar a imagem após o verificar
    }

}