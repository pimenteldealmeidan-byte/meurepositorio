function mostrarMensagem() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if (nome === "" || idade === "") {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
    } else if (idade >= 18) {
        resultado.innerHTML = "Olá, " + nome + "! Você é maior de idade.";
    } else {
        resultado.innerHTML = "Olá, " + nome + "! Você é menor de idade.";
    }
}

