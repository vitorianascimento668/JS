let clickNum = document.querySelectorAll('.teclado--num')
let audio = document.querySelectorAll('audio')
let botao = document.querySelector('button')
let input = document.querySelector('input')
let v = 0
let t = 1
var v1 = 0
let contador = 0
let c = 0
let marca1= ''
let texto = ''
let numarray = []
let indicado = []
let auxiliadora = []
let contadorInput = ''

function comecei (){
clickNum.forEach((marca,indice) =>{ // evento do click
    
    marca.addEventListener('click',()=>{
        
        marca.style.border='3px solid blue '
        marca.style.color='blue'
        setTimeout(()=>{
            marca.style.border='3px solid white '
            marca.style.color='white' 

        },'300')

        
        marca1 = marca
        numarray = marca.getAttribute('data-num')
        indicado = indice + 1
        escolha(indicado,numarray)

    })

})}
let contadoTexto = 0

function textoDigitado(){ // Texto digitado na segunda caixa + botão
    
        texto = input.value
                if(contadoTexto < texto.length){
                auxiliadora = texto.slice(v,t) 
                numarray = auxiliadora
                indicado = auxiliadora
                v++
                t++ 
   
                if (v == texto.length){
                    i = 0
                    v = 0
                    t = 1
                }
                contadoTexto ++

                
                escolha(parseInt(indicado),parseInt(numarray))
                chamar()
            }

            if (contadoTexto == contador){
                contadoTexto = 0 
            
            }
            

    }

  
    function corescolhida(){ // Aqui vai as cores quando clicarmos em cada item
        clickNum.forEach((v1) =>{
               if(v1.getAttribute('data-num') == auxiliadora){                    
                    v1.classList.add('colorida')
                    setTimeout(()=>{
                        v1.classList.remove('colorida')
        
                },'500')
                
        
               }
    
            
        })
    }
    
function escolha(v1,v2){
    indicado = v1
    numarray = v2

    
    switch (indicado){
        case 1:
            return tocaSom() ,corescolhida()
            
        case 2:
            return tocaSom() ,corescolhida()
        break
        case 3:
            return tocaSom() ,corescolhida()
        break
        case 4:
            return tocaSom(),corescolhida()
        break
        case 5:
            return tocaSom() ,corescolhida()
        break
        case 6:
            return tocaSom(),corescolhida()
        break
        case 7:
            return tocaSom(),corescolhida()
        break
        case 8:
            return tocaSom(),corescolhida()
        break
        case 9:
            return tocaSom(),corescolhida()
        break
    }
    chamar()        



}


    
function tocaSom(){
        if (indicado == parseInt(numarray)){           
            return audio[parseInt(numarray-1)].play()
            
}
}
function chamar(){
    setTimeout(()=>{
            if (contador < texto.length){
                contador++   
                textoDigitado()
                corescolhida()
                
            } else if (contador == texto.length){
                contador = 0
                chamar()
            }
            
},'800')}
let controle = 0
let boleano = false
var contandoosInput = input.value.length
function eventoTeclado(){
    document.addEventListener('keypress', (e)=>{
          if (controle == 0) {

            v1 = e.code.slice(0,6)

            if (v1 == "Numpad"){
                indicado = e.code.slice(6,7)
                numarray = e.code.slice(6,7)
                auxiliadora = e.code.slice(6,7)
                escolha(parseInt(indicado),parseInt(numarray))
                chamar() 
            }else{
                indicado = e.code.slice(5,6)
                numarray = e.code.slice(5,6)
                auxiliadora = e.code.slice(5,6)
                escolha(parseInt(indicado),parseInt(numarray))
                chamar() 
            }
      }
         else{
            inputAtualizado()
          } 
    
          
    }) 

}
function inputAtualizado (epa){
    input.addEventListener('click',()=>{
        controle =  1
        eventoTeclado()
    })}


input.addEventListener('keypress',(e)=>{
    if(e.code == "Enter" || e.code ==  'NumpadEnter' ){
        e.preventDefault()
        textoDigitado()
    }
})
eventoTeclado()
inputAtualizado()
comecei() // funcao  de "play"-------

/*

1-) Colocar o item teclado--num em um array que seja funcional, para fazer alterações ------ OK------
2-) Vamos pega esse item e adicionar uma função de click ------ OK------
3-) apos pega o data num, vamos adicionar um SWHIT ------ OK------
4-) Depois preciso colocar uma funçao que pegue o data--num ------ OK------
5-) Apos adiciona o swhift temos que fazer a comparação de valor clicado com o valor do case ------ OK------
6-) Adiciona um função de retorno com cada toque para cada valor selecionado


//adiconando funcionalidade de digitacao


1-) fazer uma funcao para envia os valores para a minha funcao principal       ok----
2-) Agora fazer o comparitivo, sendo que cada valor digitado, precisa ser enviado para o nosso CASE, para fazer a tocagem ok----
3-) Esse valor digitado, também precisa ser comparado com o trocaSom, para pode atribuior o som que sera tocado ok ---
4=) exibir o som atraves da caixa de texto ok --
5-) descobrir como clica no  teclado e o nosso som sair 
6-) Fazer o tocaSom volta para nossa variavel do botao, até o toca som, estoura o loop



*/
