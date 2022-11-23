let botao = document.querySelector('.botao_busca')
let aguarde = document.querySelector('.aguarde')
let container = document.querySelector('.contaier-resposta')
let conversaoKevin = 0
let quantidade = 0
let res = []
let temalgo = []
let nome = ''
let pais = ''


var clicou = async () =>{
    quantidade ++
    document.querySelector('.error').style.display = 'none'

   if (quantidade == 1){
    aguarde.style.display = 'block'
    setTimeout(()=>{
        aguarde.style.display = 'none'

    },'500')    
   }
   container.style.display = 'block'

    let input = document.querySelector('input').value
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=297c8e1c49b86f7d3cd75ffb4de43966
    `
    let dados_url = await fetch(url) 
    let dados_url_json = await dados_url.json()
        if(dados_url_json.length == 0 || input.length == 0){
            error()
        }
        else{
           
            fazerConversao(dados_url_json) }        
        
    


   
}
function fazerConversao (dadosdaURL) {
     dadosdaURL.map((parametro)=>{
        let lat = parametro.lat
        let lon = parametro.lon

        nome = parametro.name 
        pais = parametro.country
       pegarTemperatura(lat,lon)


    })
}


var pegarTemperatura = async (lat,lon)=>{
   
    let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=297c8e1c49b86f7d3cd75ffb4de43966` 
    var r = await fetch(url2)
    var resultado = await r.json()
        console.log(resultado)
        mostrarTemperatura(resultado)
    
}

let mostrarTemperatura = async (res) =>{
        conversaoKevin = res.main.temp - 273.15
        document.querySelector('.nome-estado').innerHTML = `${nome} - ${pais}`
        document.querySelector('.valor-vento').innerHTML = `${res.wind.speed}<small> km/h</small>`
        document.querySelector('.valor-temperatura').innerHTML = `${conversaoKevin.toFixed(2)} <small>°C</small>`
        idCidade = res.sys.id
        id = res.id
        let clima = res.weather[0].description 
        
        climaUp(clima)
    
}
function climaUp (clima){
        
}
function error (){
    document.querySelector('.error').style.display = 'block'
    container.style.display = 'none'
   
}
botao.addEventListener('click',clicou)

