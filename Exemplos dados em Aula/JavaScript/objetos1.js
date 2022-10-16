let carros = [
    {nome:'Fiat',modelo:'Palio'},
    {nome:'Fiat',modelo:'Uno'},
    {nome:'Toyota',modelo:'Corolla'},
    {nome:'Ferrari',modelo:'Spyder'}
]
console.log(carros[2]['modelo'])
console.log(carros[3].modelo)








/*let carro = {
    Nome:'Fiat',
    Modelo:'Uno',
    Peso:'800kg',
    Ligado:false,
    Ligar:function(){
        this.Ligado = true;
        console.log('vrum vrum vrum')
    },
    Acelerar:function(){
        if (this.Ligado == true){
            console.log('acelerandooooo ')
    }else{
        console.log(this.Nome+this.Modelo+'NÃO ESTÁ LIGADO')
    }
}
    
};
carro.Ligar()

carro.Acelerar()*/
