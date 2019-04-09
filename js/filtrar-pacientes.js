var inputFiltro = document.querySelector("#filtroPaciente");


inputFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes);

    var rgx = new RegExp(this.value,"i");
        pacientes.forEach(function (paciente) {
            var nome = paciente.querySelector(".info-nome").textContent;
            if (rgx.test(nome)) {
                paciente.classList.remove("invisible");
            } else {
                paciente.classList.add("invisible");

            }
            if (inputFiltro.value.length <= 0) {
                paciente.classList.remove("invisible");
            }
        });
    

});

