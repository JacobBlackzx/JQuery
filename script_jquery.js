
/*$(document).ready(function () {
	$('button').click(function () {
		$('#unico').css("color", "red");
	});
});
*/

// ==================================================================================================== //

// Alterando o CSS JS
/*$(document).ready(function () {
	$('#azul').click(function () {
		$('p').css("color", "blue");
	});
});

$(document).ready(function () {
	$('#vermelho').click(function () {
		$('p').css("color", "red");
	});
});
*/

// ==================================================================================================== //

// Efeito fade
/*$(function () {
	
	$('#azul').click(function() {
		$('p').css("background-color", "blue");
		$('p').fadeOut();
	});
	
	$('#vermelho').click(function() {
		$('p').css("background-color", "red");
		$('p').fadeOut('slow');
		$('p').delay(3000);
		$('p').fadeIn('slow');
	});
	
})
*/

// ==================================================================================================== //

//Delay
/*$(function () {
	
	$('#azul').click(function() {
		$('p').css("background-color", "blue");
		$('p').fadeOut();
		$('p').delay('fast');
		$('p').fadeIn(5000);
	});
	
	$('#vermelho').click(function() {
		$('p').css("background-color", "red");
		$('p').fadeOut('slow');
		$('p').delay(3000);
		$('p').fadeIn('slow');
	});
	
})
*/

// Gravando Mensagens
$(function () {
	$('#azul').click(function () {
		$('p').css("background-color", "blue");
		.fadeOut()
		.delay(1000)
		.fadeIn();
	});
	
	$('#vermelho').click(function () {
		$('p').css("background-color", "red");
		.text("Cor alterado com sucesso!!!")
		.css('color','red')
		.css('border','1px solid red')
		.delay(3000)
		.fadeOut('fast');
	})
})










