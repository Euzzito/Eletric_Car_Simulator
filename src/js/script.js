function calcularSimulacao(){
    const input1 = document.getElementById("carro1")
    const input2 = document.getElementById("carro2")
    const input3 = document.getElementById("distancia")
    const input4 = document.getElementById("preco")


    if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
        alert("Atenção: Você precisa preencher os todos os campos!");
        return;
    }
}