document.getElementById('player').addEventListener("mouseover",sumarPuntos);
puntos=0;
tiempo=30;
necesarios=30;
function sumarPuntos(){
	puntos++;
	document.getElementById("puntos").innerHTML="Puntos: <b> "+ puntos+"</b>" + "/"+ necesarios + "</b>";
	randNun= Math.round(Math.random()*500);
	randNun2= Math.round(Math.random()*500);
	document.getElementById("player").style.marginTop=randNun+ "px";
	document.getElementById("player").style.marginLeft=randNun2+ "px";
	if (puntos==necesarios) {
		alert("ganaste");
	}
}


function restarTiempo(){
	tiempo--;
	document.getElementById("tiempo").innerHTML= " &nbsp;&nbsp;Tiempo: "+tiempo;
	if (tiempo==0) {
		alert("Perdiste pendejo");
		tiempo=0;
		puntos=0;
	}
}
setInterval(restarTiempo,1000);
