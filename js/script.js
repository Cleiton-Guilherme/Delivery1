let btnAdd = document.querySelector('#addBotao');


//Criar um evento de click para o botão, que ira executar a function anonima
btnAdd.addEventListener("Click", function(){
    let inputValor = document.querySelector('#meuInput').ariaValueMax;
    if(inputValor === ""){
        alert("Você não preencheu os campos!")
    }else{
        //alert("LOGIN REALIZADO COM SUCESSO")
        document.querySelector("#mensagem-ok").insertAdjacentHTML()
        "afterend",
        <div class="card-teste">
        <span>LOGIN EFETUADO COM SUCESSO</span>
        </div>
    };

    let mensagem = document.querySelector('.card-teste');
    setTimeout(() => {
        mensagem.style.display = "none";

    }, 3000);

    setTimeout(()  => {

    })

    document.querySelector('#meuInput').value = "";
    //zerou o input
});
