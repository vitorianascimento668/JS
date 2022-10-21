let vnValidador = {
    envioSubmit:(event)=>{
        event.preventDefault()
        let send = true

        let inputs = form.querySelectorAll('input')
        vnValidador.limparErros()

        for (let i = 0; i < inputs.length;i++){
            let input = inputs[i]
            let check = vnValidador.checkInput(input)
            if(check !== true){
                send= false;
                vnValidador.showError(input,check);

            }
        }

        if(send){
            form.submit();
        }
    },
    checkInput:(input)=>{
        let regras = input.getAttribute('data-regras')

        if(regras !== null){
         regras = regras.split('/')
         for(let k in regras){
            let rDetalhes = regras[k].split('=')
            switch (rDetalhes[0]){
                case 'requerido':
                    if(input.value == ''){
                        return 'ERROR, PRECISA DIGITAR ALGO'}
                break;
                case 'min':
                        if (input.value.length < rDetalhes[1]){
                            return 'Campo tem que ter pelo menos,'+rDetalhes
                        }
                break; 
                case 'email':
                        if(input.value != ''){
                            
                        }
            }
         }
        }
        return true;

    },
    showError:(input,error)=>{
        input.style.borderColor = 'red'
        let erroElemento = document.createElement('div')
        erroElemento.classList.add('error')
        erroElemento.innerHTML = error
        input.parentElement.insertBefore(erroElemento,input.ElementSibling)
    },
    limparErros:()=>{
        let inputs = form.querySelectorAll('input')
        for(let i = 0;i < inputs.length;i++){
            inputs[i].style = ''

        }
        let errorElemento = document.querySelectorAll('.error')
        for (let i=0;i < errorElemento.length;i++){
            errorElemento[i].remove()

        }
    }
}

let form = document.querySelector('.vn-validador');
form.addEventListener('submit',vnValidador.envioSubmit)