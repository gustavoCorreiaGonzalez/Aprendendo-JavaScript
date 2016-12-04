var trs = document.getElementsByClassName("paciente");

percorreArray(trs, function(tr){
	tr.addEventListener("mouseover", function(){
		this.setAttribute("bgcolor","grey");
	});
});