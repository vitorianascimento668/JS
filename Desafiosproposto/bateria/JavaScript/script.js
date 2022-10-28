/*

1-) Colocar o item teclado--num em um array que seja funcional, para fazer alterações ------ OK------
2-) Vamos pega esse item e adicionar uma função de click ------ OK------
3-) apos pega o data num, vamos adicionar um SWHIT ------ OK------
4-) Depois preciso colocar uma funçao que pegue o data--num ------ OK------
5-) Apos adiciona o swhift temos que fazer a comparação de valor clicado com o valor do case ------ OK------
6-) Adiciona um função de retorno com cada toque para cada valor selecionado



*/
let clickNum = document.querySelectorAll('.teclado--num')
let audio = document.querySelectorAll('audio')
let numarray = 0
var indicado = ''


clickNum.forEach((marca,indice) =>{
    marca.addEventListener('click',()=>{
        numarray = marca.getAttribute('data-num')
        
        indicado = indice + 1
        switch (indice+1){
            case 1:
                return tocaSom()
            case 2:
                return tocaSom()
            break
            case 3:
                return tocaSom()
            break
            case 4:
                return tocaSom()
            break
            case 5:
                return tocaSom()
            break
            case 6:
                return tocaSom()
            break
            case 7:
                return tocaSom()
            break
            case 8:
                return tocaSom()
            break
            case 9:
                return tocaSom()
            break
        }



    })
})

    
function tocaSom(){
    for (let i in audio){
        if (indicado == parseInt(numarray)){
            return audio[parseInt(numarray)].play()

        }
}
}
