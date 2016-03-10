window.addEventListener('load', function() {
	//stran nalozena
		
	//izvedi prijavo
	
	var izvediPrijavo = function(){
		var uporabnik = document.querySelector("#uporabnisko_ime")
		.value;
		
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility="hidden";
	}
	
	//dodaj opomnik
	var dodajOpomnik = function(){
		var naziv_opomnika = document.querySelector("#naziv_opomnika").value;
		var cas_opomnika = document.querySelector("cas_opomnika").valure;
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomnik").innerHTML += " \
		<div class='opomnik_rob_senca'> \
			<div class ='naziv_opomnika'> "+naziv_opomnika +"</div>\
			div class='cas_opomnika'>"opomnik cez <span>" + cas_opomnika +</span> sekund  </div> \
		</div>";
		
	}
	document.querySelector("#dodajGumb")addEventListener('click', dodajOpomnik);
	
	document.querySelector("#prijavniGumb")
	.addEventListener('click', izvediPrijavo);
		
		
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});