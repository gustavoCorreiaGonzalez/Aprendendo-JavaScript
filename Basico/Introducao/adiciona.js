var botaoAcidionar = document.querySelector("#adicionar-paciente");

botaoAcidionar.addEventListener("click", function(event){
	event.preventDefault();

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	var pacienteNovo = "<tr class='paciente'>"+
						"<td class='nome'>"+campoNome.value+"</td>"+
						"<td class='peso'>"+campoPeso.value+"</td>"+
						"<td class='altura'>"+campoAltura.value+"</td>"+
						"<td class='imc'></td>"+
					"</tr>";

	var tabela = document.querySelector("table");
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;

	campoNome.value = "";
	campoAltura.value = "";
	campoPeso.value = "";
});
