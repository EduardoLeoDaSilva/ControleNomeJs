var btnAdicionar = document.querySelector("#adicionar-paciente");
var ul= document.querySelector("#mensagem-erro")


btnAdicionar.addEventListener("click", function () {
    event.preventDefault();
    ul.innerHTML = "";
    var formAdicionarPaciente = document.querySelector("#form-adiciona");
    var paciente = obterPaciente(formAdicionarPaciente);
    var erros = validarPaciente(paciente);
    if(erros.length >=1){
        exibirMensagensDeErro(erros);

    }else{
       
       ul.classList.add("invisible");
       ul.innerHTML = "";
        adicionarPaciente(paciente);
        formAdicionarPaciente.reset();
    }


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
    pacienteTr.classList.add("paciente");
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

function validarPaciente(paciente){
    
    var erros = [];

    
    if(!validarAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if(!validarPeso(paciente.peso)){
        erros.push("Peso invalido");
    }

    if(!(paciente.nome.length >= 2)){
        erros.push("Nome tem que ter no minimo 2 caracteres");
    }

    if(!(paciente.gordura > 0)){
        erros.push("Gordura tem q ser maior q 0");
    }
    return erros;

}


function exibirMensagensDeErro(erros){
    var ulErro = document.querySelector("#mensagem-erro");
    erros.forEach(function(erro){
        var liErro = document.createElement("li");
        liErro.textContent = erro;
        ulErro.appendChild(liErro);
    });
    ulErro.classList.remove("invisible");
}
