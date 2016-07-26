$(document).ready(function(){

	setInterval(function(){
		var horaL = new Date();
		var hora = horaL.getHours();
		var minuto = horaL.getMinutes();
		var segundo = horaL.getSeconds();

		var horaA = (hora < 10)? "0" + hora : hora;
		var minutoA = (minuto < 10)? "0" + minuto : minuto;
		var segundoA = (segundo < 10)? "0" + segundo : segundo;

		$("#hora").html(horaA);
		$("#minutos").html(minutoA);
		$("#segundos").html(segundoA);
		
	},1000);
});
