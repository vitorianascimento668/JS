let botao = document.querySelector('.botao_busca')

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
function pegarTemperatura(lat,lon){
    let url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=297c8e1c49b86f7d3cd75ffb4de43966   `
    console.log(url2)
}
botao.addEventListener('click',clicou)