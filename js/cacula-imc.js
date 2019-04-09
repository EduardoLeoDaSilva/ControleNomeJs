console.log("Estou sendo carrega ")

var pacientes = document.querySelectorAll(".paciente");
preencherCampImc(pacientes);

/**
 * Esta função preenche o campo IMC na tabela. Retorno: Void
 * @param {*} pacientes Este parametro é obrigatório
 */
function preencherCampImc(pacientes) {
    console.log("Função iniciada");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        if (!validarAltura(paciente) && !validarPeso(paciente)) {
            paciente.querySelector(".info-imc").textContent = "Altura e Peso inválidos";
            paciente.classList.add("altura-peso-invalido");
        }
        else if (!validarAltura(paciente)) {
            paciente.querySelector(".info-imc").textContent = "Altura inválida";
            paciente.classList.add("altura-peso-invalido");
        }
        else if (!validarPeso(paciente)) {
            paciente.querySelector(".info-imc").textContent = "Peso inválida";
            paciente.classList.add("altura-peso-invalido");
        }
        else {
            var imc = calcularImc(paciente);
            paciente.querySelector(".info-imc").textContent = imc;
        }
    }
    console.log("Função finalizada");
}

function calcularImc(paciente){
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura= paciente.querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);
    return  imc.toFixed(2);
}

function validarPeso(paciente){
    var peso = paciente.querySelector(".info-peso").textContent;
    if(peso >0 && peso <=100){
        return true;
    }
    return false;

}

function validarAltura(paciente){
    var altura = paciente.querySelector(".info-altura").textContent;
    if(altura >0 && altura <=3){
        return true;
    }
    return false;
}
