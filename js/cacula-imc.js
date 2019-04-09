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
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura= paciente.querySelector(".info-altura").textContent;
        if (!validarAltura(altura) && !validarPeso(peso)) {
            paciente.querySelector(".info-imc").textContent = "Altura e Peso inválidos";
            paciente.classList.add("altura-peso-invalido");
        }
        else if (!validarAltura(altura)) {
            paciente.querySelector(".info-imc").textContent = "Altura inválida";
            paciente.classList.add("altura-peso-invalido");
        }
        else if (!validarPeso(peso)) {
            paciente.querySelector(".info-imc").textContent = "Peso inválida";
            paciente.classList.add("altura-peso-invalido");
        }
        else {
            
            var imc = calcularImc(peso,altura);
            paciente.querySelector(".info-imc").textContent = imc;
        }
    }
    
}

function calcularImc(peso, altura){
    var imc = peso / (altura * altura);
    return  imc.toFixed(2);
}

function validarPeso(peso){
    if(peso >0 && peso <=1000){
        return true;
    }
    return false;

}

function validarAltura(altura){
    if(altura >0 && altura <=3){
        return true;
    }
    return false;
}
