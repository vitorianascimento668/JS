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
let botao = document.querySelector('button')
let input = document.querySelector('input')
let numarray = 0
let contando = 0
let indicado = ''
let texto = []



clickNum.forEach((marca,indice) =>{ // evento do click
    
    marca.addEventListener('click',()=>{
        
        marca.style.border='3px solid blue '
        setTimeout(()=>{
            marca.style.border='3px solid white '

        },'100')

        

        numarray = marca.getAttribute('data-num')
        indicado = indice + 1
        switch (indice+1){
            case 1:
                return tocaSom() ,marca.style.border='3px solid green ' 
                
            case 2:
                return tocaSom() ,marca.style.border='3px solid red ' 
            break
            case 3:
                return tocaSom() ,marca.style.border='3px solid yellow ' 
            break
            case 4:
                return tocaSom(),marca.style.border='3px solid #ff6600 ' 
            break
            case 5:
                return tocaSom() ,marca.style.border='3px solid grey' 
            break
            case 6:
                return tocaSom(),marca.style.border='3px solid black ' 
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
    
    function textoDigitado(){
        
            texto = input.value
            var con = 0
                if (texto.length > 1){
                    for (let i = 0; i < texto.length;i++){
                        
                        indicado = texto[con]
                        numarray  = texto[con]       
                        tocaSom()
                        con++

                    }}
                else{
                        indicado = texto
                        numarray  = texto
                        tocaSom() 
            }
}
            


    


//adiconando funcionalidade de digitacao


    

/*
1-) fazer uma funcao para envia os valores para a minha funcao principal       ok----
2-) Agora fazer o comparitivo, sendo que cada valor digitado, precisa ser enviado para o nosso CASE, para fazer a tocagem ok----
3-) Esse valor digitado, também precisa ser comparado com o trocaSom, para pode atribuior o som que sera tocado ok ---
4=) exibir o som atraves da caixa de texto ok --
5-) descobrir como clica no  teclado e o nosso som sair 
6-) Fazer o tocaSom volta para nossa variavel do botao, até o toca som, estoura o loop



*/



    
function tocaSom(){
        if (indicado == parseInt(numarray)){
           
            return audio[parseInt(numarray-1)].play()
        
}
}
