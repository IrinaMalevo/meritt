$(document).ready(function(){

	// verifica o menor tamanho
	mediaCheck({
		media: '(min-width: 320px) and (max-width: 767px)',
		entry: inicia320
	});
	mediaCheck({
		media: '(min-width: 768px) and (max-width: 990px)',
		entry: inicia768,
		exit: encerra768
	});
	mediaCheck({
		media: '(max-width: 1024px)',
		entry: inicia1024
	});

	/*
	mediaCheck({
		media: '(max-width: 420px)',
		entry: function() {
		console.log('starting 420');
		},
		exit: function() {
		console.log('leaving 420');
		},
		both: function() {
		console.log('changing state');
	}
	*/
});

var inicia320 = function(){
	$('#features-container h2').click(accordionFeatures);
	
}

var inicia768 = function(){
	$('#menu-features a').on('click', abaFeatures);
	//$('#menu-features a').on('tap', abaFeatures);

	$('#menu-features a').first().click();
}
var encerra768 = function(){
	$('#features-container section').show();
}

var inicia1024 = function(){}


// trata a navegação por abas, exibida em tablets
var abaFeatures = function(event){
	event.preventDefault();

	$('#features-container section').hide();
	$('#menu-features a').removeClass();
	$( $(event.target).attr('href') ).show();
	$(event.target).addClass('active');
}

// trata a navegação por accordionFeatures
var accordionFeatures = function(event){

	$('#features-container h2').removeClass();
	$('#features-container ul').slideUp();

	$(event.target).addClass('active');
	$('#features-container .active').next().slideDown();

}