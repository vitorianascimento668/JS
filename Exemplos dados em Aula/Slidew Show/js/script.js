let totalSlides = document.querySelectorAll('.slider--item').length
let novaMargim = 0


document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`
function indo(){
    if(novaMargim === 200){
        novaMargim = 0 
        updateMargin()
    }
    else  if(novaMargim >= 0){
        novaMargim += 100
        updateMargin()
    }
}
function voltando(){
   if (novaMargim === 0){
        novaMargim = 200
        updateMargin()   
   }else   if (novaMargim > 0){
        novaMargim -= 100 
        updateMargin()   
    }
    

}
function updateMargin() {
    document.querySelector('.slider--width').style.marginLeft = `-${novaMargim}vw`
}

