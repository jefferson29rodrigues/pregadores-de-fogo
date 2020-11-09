const pregadores = document.querySelectorAll(".card")

/*
console.log(pregadores)
console.log(pregadores[0].id)
console.log(pregadores[1].id)
console.log(pregadores[2].id)
*/

for (let pregador of pregadores) {

	pregador.addEventListener("click", function() {
		
		const pregadorId = pregador.getAttribute("id")

		window.location.href = `c:/pregadores-de-fogo/${pregadorId}.html`    	
	})
}