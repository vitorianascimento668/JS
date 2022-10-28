/*

1-) Colocar o item teclado--num em um array que seja funcional, para fazer alterações ------ OK------
2-) Vamos pega esse item e adicionar uma função de click ------ OK------
3-) apos pega o data num, vamos adicionar um SWHIT ------ OK------
4-) Depois preciso colocar uma funçao que pegue o data--num ------ OK------
5-) Apos adiciona o swhift temos que fazer a comparação de valor clicado com o valor do case ------ OK------
6-) Adiciona um função de retorno com cada toque para cada valor selecionado



*/
let clickNum = document.querySelectorAll('.teclado--num')
let numarray = 0

clickNum.forEach((marca,indice) =>{
    marca.addEventListener('click',()=>{
        numarray = marca.getAttribute('data-num')
        switch (indice){
            case 0:
                
            break
            case 1:
                
            break
            case 2:

            break
            case 3:

            break
            case 4:

            break
            case 5:

            break
            case 6:

            break
            case 8:
                
            break
        }



    })
})

