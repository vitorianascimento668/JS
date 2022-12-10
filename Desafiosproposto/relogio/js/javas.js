var data = ''
var horas = ''
var minutos = ''
var segundos = ''
function atualizaRelogio(){
     data = new Date
     horas = data.getHours()
     minutos = data.getMinutes()
     segundos = data.getSeconds()
}
function relogioDigital(){
    atualizaRelogio()
    document.querySelector('.numeros-digital').innerHTML = `${horas} : ${minutos} : ${segundos}`
}
setInterval(atualizaRelogio, '100')
setInterval(relogioDigital, '100')
