function calcularSimulacao() {
    const input1 = document.getElementById("carro1");
    const input2 = document.getElementById("carro2");
    const input3 = document.getElementById("distancia");
    const input4 = document.getElementById("preco");

    if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
        alert("Atenção: Você precisa preencher os todos os campos!");
        return;
    }

    const c1 = parseFloat(input1.value);
    const c2 = parseFloat(input2.value);
    const dist = parseFloat(input3.value);
    const preco = parseFloat(input4.value);

    const custo1 = (dist / c1) * preco;
    const custo2 = (dist / c2) * preco;

    let status = "";
    let corFundo = "";

    if (custo1 < custo2) {
        status = "Carro 1 é ECONÔMICO!";
        corFundo = "bg-success";
    } else if (custo2 < custo1) {
        status = "Carro 2 é ECONÔMICO!";
        corFundo = "bg-success";
    } else {
        status = "Empate: Custo idêntico";
        corFundo = "bg-warning";
    }

    const resultadoDiv = document.getElementById("resultado-simulacao");

    resultadoDiv.innerHTML = `<li class="item-resultado ${corFundo}">
        <span><strong>Status:</strong> ${status}</span>
        <span><strong>Custo Carro 1:</strong> R$ ${custo1.toFixed(2)}</span>
        <span><strong>Custo Carro 2:</strong> R$ ${custo2.toFixed(2)}</span>
    </li>`;

    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
}