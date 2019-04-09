var btnAdicionar = document.querySelector("#adicionar-paciente");


btnAdicionar.addEventListener("click", function () {
    event.preventDefault();

    var formAdicionarPaciente = document.querySelector("#form-adiciona");
    var paciente = obterPaciente(formAdicionarPaciente);
    adicionarPaciente(paciente);


});

/**
 * Função para obter um novo paciente.
 * Retorna um objeto paciente={nome, peso, altura, gordura}
 * @param {*} form Parametro obrigatoria, contendo os campos para recuperação dos dados
 */
function obterPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value

    }

    return paciente;

}
/**
 * Adicionar pacientes na tabela
 * @param {*} paciente Paciente a ser adicionado
 */
function adicionarPaciente(paciente) {
    var atributos = Object.keys(paciente);
    var pacienteTr = document.createElement("tr");
    var tabela = document.querySelector("#tabela-pacientes")
    atributos.forEach(element => {
        var td = document.createElement("td");
        td.textContent = paciente[element]
        pacienteTr.appendChild(td);

    });
    var imcTd = document.createElement("td");
    pacienteTr.appendChild(imcTd);
    imcTd.textContent = calcularImc(paciente.peso, paciente.altura);
    tabela.appendChild(pacienteTr);


}

