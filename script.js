function verificar() {
    var data = new Date()
    var ano = data.getFullYear()                              // FullYear pega o ano com os 4 digitos (ex 2024)
    var fano = document.getElementById('txtano')
 // var res = document.getElementById('res')                  // lembrando que pode ser assim ou da forma a baixo com querySelector
    var res = document.querySelector('div#res')               // essa forma é mais moderna
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se fano (ano digitado) nao foi digitado "ou" fano for maior que ano atual
 // if (fano.value.length == 0 || fano.value > ano) {         // dessa maneira sem Number tambem funcionou
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')       // lembrando que aqui o [0] é Masculino e [1] é Feminino
        var idade = ano - Number(fano.value)                  // idade = ano atual - ano digitado
        var genero = ''                                       // var genero começa como uma string vazia
        var img = document.createElement('img')               // ele vai criar uma tag 'img'
        img.setAttribute('id', 'foto')                        // criou um img com id='foto'
        if (fsex[0].checked) {                                // se fsex da posição zero (masc) for selecionado
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {                   // se idade for maior ou igual a 0 e menor que 10
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
         // } else if (idade >= 10 && idade < 21) {           // se nao se idade for maior ou igual a 10 e menor que 21
            } else if (idade < 21) {                          // se nao esta entre 0 e 10 esta acima de 10 (pode ser dessa forma ou acima)
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {                          // se nao se for acima de 21 e for abaixo de 50
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {                                          // se nao for nenhuma das opcoes acima (ou seja, acima de 50)
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {                         // se nao se a posição 1 (fem) for selecionado [podia usar apenas o else]
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {                   // if, else if e else foram copiados de cima de 'Homem', pois é mesma coisa
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'                        // forma de centralizar o texto pelo JavaScript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)                                  // vai adicionar um elemento. que é o elemento 'img'
    }
}