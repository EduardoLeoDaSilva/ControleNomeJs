var tabela = document.querySelector("#tabela-pacientes")


tabela.addEventListener("dblclick", function(event){

    var pacienteTr = event.target.parentNode;
    pacienteTr.classList.add("invisivel");
    setTimeout(function(){
        pacienteTr.remove();
    } , 500);

});



// pacientes.forEach(function(paciente){

//     paciente.addEventListener("dblclick", function(){
//          console.log(paciente)
//     });


    
// });