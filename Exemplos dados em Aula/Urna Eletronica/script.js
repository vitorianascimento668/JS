//CONTROLE DE INTERFACE
var seuVotoPara = document.querySelector('.d-1-1 span')
var cargo = document.querySelector('.d-1-2 span')
var descricao = document.querySelector('.d-1-4')
var aviso = document.querySelector('.d-2')
var lateral = document.querySelector('.d-1-rigth')
var numeros =  document.querySelector('.d-1-3')

//CONTROLE DE AMBIENTE
var etapaAtual = 0
var numero = '';
var votoBranco = true


//FUNCTIONS 
function comecarEtapa(){
    let etapa = etapas[etapaAtual]
    let numeroHtml = ''
    numero = ''
    votoBranco = false

    for(let i=0;i< etapa.numeros;i++){
        if (i === 0){
            numeroHtml += '<div class="numero pisca"> </div>'
        }else{
            numeroHtml += '<div class="numero"> </div>'
        }
    }
    
    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml


}
function atualizaInterface(){
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        }else{
            return false

        }
    })
        if(candidato.length > 0){
            descricao.style.fontWeight = 'normal'
            descricao.style.fontSize = '15px'
            descricao.style.paddingTop = '10px'
            candidato = candidato[0]
            seuVotoPara.style.display = 'block'
            aviso.style.display = 'block'
            descricao.innerHTML =  `Nome: ${candidato.nome} <br> Partido: ${candidato.partido} <br> Vice: ${candidato.vice}`
            var fotosHtml = ''
            for(let i in candidato.fotos){
                if(candidato.fotos[i].small){
                    fotosHtml += `<div class="d-1-img small"><img src="imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}           </div>`
            } else{
                fotosHtml += `<div class="d-1-img small"><img src="imagens/${candidato.fotos[i].url} "alt="">${candidato.fotos[i].legenda} </div>`
            }
            }
            lateral.innerHTML = fotosHtml

        }else{
            aviso.style.display = 'block'
            descricao.style.fontWeight = 'bold'
            descricao.style.fontSize = '40px'
            descricao.style.paddingTop = '10px'
            descricao.innerHTML = 'VOTO NULO'
        }
console.log("candidato: ",candidato)

}
function clicou(n){
    var elNumero = document.querySelector('.numero.pisca')
    if (elNumero !== null){
            elNumero.innerHTML = n
            numero = `${numero}${n}`

            elNumero.classList.remove('pisca')
            if(elNumero.nextElementSibling !== null){
                elNumero.nextElementSibling.classList.add('pisca')}
        }else{
            atualizaInterface()
        }
        
}
function branco(){
    numero = ''
    votoBranco = true
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    numeros.innerHTML = ''
    descricao.style.fontWeight = 'bold'
    descricao.style.fontSize = '40px'
    descricao.style.paddingTop = '10px'
    descricao.innerHTML = 'VOTO EM BRANCO'

}
function corrigir(){
    comecarEtapa()

}
function confirmar(){
    let etapa = etapas[etapaAtual]
    if (votoBranco === true) {
        alert('confirmado como voto em BRANCO')
    } else if (numero.length === etapa.numeros){
        alert('CONFIRMANDO COMO ' + numero)
    }

}
comecarEtapa()