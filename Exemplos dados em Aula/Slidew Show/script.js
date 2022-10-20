let totalSlides = document.querySelectorAll('.slider--item').length
let  passeSlider = 0

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`
function indo(){
    passeSlider ++
    if(passeSlider > (totalSlides - 1) ){
        passeSlider = 0
    }
    updateMargin()
}
function voltando(){
    passeSlider --
    if (passeSlider < 0){
        passeSlider = totalSlides - 1 }

        updateMargin()   
}
function updateMargin() {
    let novaMargim = (passeSlider * document.body.clientWidth) 
    document.querySelector('.slider--width').style.marginLeft = `-${novaMargim}px`
}

setInterval(indo, '2000')