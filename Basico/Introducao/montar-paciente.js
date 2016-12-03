function montaPaciente(pacienteTr) {
	var tdNome = pacienteTr.getElementsByClassName("nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("altura")[0];

	var pacienteAtual = {nome: tdNome.textContent, 
						 peso: tdPeso.textContent, 
						 altura: tdAltura.textContent, 
						 pegaImc: function(){
						 	if (this.altura != 0) {
								var imc = this.peso / (this.altura * this.altura);
								return imc;
							} else {
								console.log("Divisao por Zero");
							}	
						 }};

	var imc = pacienteAtual.pegaImc();

	var tdImc = pacienteTr.getElementsByClassName("imc")[0];
	tdImc.textContent = imc;
}