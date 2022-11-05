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


let clickNum = document.querySelectorAll('.teclado--num')
let audio = document.querySelectorAll('audio')
let botao = document.querySelector('button')
let input = document.querySelector('input')
var v = 0
var t = 1
let contador = 0
let marca1= ''
let texto = ''
let numarray = []
let indicado = []
let auxiliadora = []




function comecei (){
clickNum.forEach((marca,indice) =>{ // evento do click
    
    marca.addEventListener('click',()=>{
        
        marca.style.border='3px solid blue '
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

  function textoDigitado(){
    
        texto = input.value

        for (let i = 0 ; i < texto.length; i++){   
            
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
            if(contador < texto.length){
                chamar()
            }
            
            escolha(parseInt(numarray),parseInt(indicado))
           
        }      
    }
    
var comprador = [] 
var c = 0
function corescolhida(){
    clickNum.forEach((v1) =>{
        comprador = v1.getAttribute('data-num')
        if(comprador == auxiliadora){
            v1.style.border='3px solid green ' 
            v1.style.color='green'
            false
    
        }
        else if(c < 1){
            setInterval(()=>{
                c++
                v1.style.border='3px solid white '
                v1.style.color='white' 
    
            },'700')
        }
        
    })
}
function escolha(v1,v2){
    indicado = v1
    numarray = v2

    if (numarray == auxiliadora){
        
    }
    
    switch (indicado){
        case 1:
            return tocaSom() ,marca1.style.border='3px solid green ' ,marca1.style.color='green' 
            
        case 2:
            return tocaSom() ,marca1.style.border='3px solid red',marca1.style.color='red'  
        break
        case 3:
            return tocaSom() ,marca1.style.border='3px solid yellow ' ,marca1.style.color='yellow ' 
        break
        case 4:
            return tocaSom(),marca1.style.border='3px solid #ff6600 ' ,marca1.style.color='#ff6600 ' 
        break
        case 5:
            return tocaSom() ,marca1.style.border='3px solid grey' ,marca1.style.color='grey ' 
        break
        case 6:
            return tocaSom(),marca1.style.border='3px solid black ' ,marca1.style.color='black ' 
        break
        case 7:
            return tocaSom(),marca1.style.border='3px solid  blueviolet' ,marca1.style.color='blueviolet ' 
        break
        case 8:
            return tocaSom(),marca1.style.border='3px solid  blue' ,marca1.style.color='blue ' 
        break
        case 9:
            return tocaSom(),marca1.style.border='3px solid  purple' ,marca1.style.color='purple ' 
        break
    }

    
    

}


    
function tocaSom(){
        if (indicado == parseInt(numarray)){           
            return audio[parseInt(numarray-1)].play()
            
}
}
comecei()



function chamar(){
    setInterval(()=>{
            if (contador < texto.length){   
                contador++
                textoDigitado()
                
            } 
            
},'900')}
setInterval(()=>{
    corescolhida()

},'900')
