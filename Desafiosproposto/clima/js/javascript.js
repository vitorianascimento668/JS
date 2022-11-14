let botao = document.querySelector('.botao_busca')
let conversaoKevin = 0

function fazerConversao (dadosdaURL) {
     dadosdaURL.map((parametro)=>{
        let lat = parametro.lat
        let lon = parametro.lon
       pegarTemperatura(lat,lon)


    })
}

 var clicou = async () =>{
    let input = document.querySelector('input').value
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=297c8e1c49b86f7d3cd75ffb4de43966
    `
    let dados_url = await fetch(url) 
    let dados_url_json = await dados_url.json()
    fazerConversao(dados_url_json)

   
}
var pegarTemperatura = async (lat,lon)=>{
    let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=297c8e1c49b86f7d3cd75ffb4de43966   `
    var r = await fetch(url2)
    var resultado = await r.json()
    mostrarTemperatura(resultado)
}

let mostrarTemperatura = async (res) =>{
        conversaoKevin = res.main.temp - 273.15
        document.querySelector('.nome-estado').innerHTML = `${res.name} - ${res.sys.country}`
        document.querySelector('.valor-vento').innerHTML = `${res.wind.speed}`
        document.querySelector('.valor-temperatura').innerHTML = `${conversaoKevin.toFixed(2)}`


        console.log(res)
    
}
botao.addEventListener('click',clicou)

