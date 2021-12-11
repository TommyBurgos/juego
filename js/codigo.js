document.getElementById('player').addEventListener("mouseover",sumarPuntos);
document.getElementById('villano').style.marginTop="30px";
document.getElementById('villano').style.marginLeft="150px";
puntos=0;
tiempo=30;
necesarios=30;


setInterval(restarTiempo,1000);
function moverVillano(){
	moviVi=Math.round(Math.random()*500)+3;
	document.getElementById('villano').style.marginTop= moviVi+"px";
document.getElementById('villano').style.marginLeft="150px";
}
setInterval(moverVillano,1000);

function sumarPuntos(){
	puntos++;
	document.getElementById("puntos").innerHTML="Puntos: <b> "+ puntos+"</b>" + "/"+ necesarios + "</b>";
	randNun= Math.round(Math.random()*500);
	randNun2= Math.round(Math.random()*500);
	document.getElementById("player").style.marginTop=randNun+ "px";
	document.getElementById("player").style.marginLeft=randNun2+ "px";
	if (puntos==necesarios) {
		alert("ganaste");
		tiempo=30;
	}
}

function restarTiempo(){
	if (tiempo>=0) {
		tiempo--;	
	}
	
	document.getElementById("tiempo").innerHTML= " &nbsp;&nbsp;Tiempo: "+tiempo;
	if (tiempo==0) {		
		tiempo=0;
		puntos=0;
		alert("Perdiste pendejo");
	}
}
function morir(){
	playerTop= document.getElementById("player").style.marginTop;
	playerLeft= document.getElementById("player").style.marginLeft;
	villTop= document.getElementById('villano').style.marginTop;
	villLeft=document.getElementById('villano').style.marginLeft;
	if (playerTop==villTop && playerLeft==villLeft) {
		tiempo=30;
		alert("Haz Perdido"+ ", Tu puntaje es de: "+puntos);
		puntos=0;

	}
}


