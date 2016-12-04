var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, function(pacienteTr){
		montaPaciente(pacienteTr);
	});
});