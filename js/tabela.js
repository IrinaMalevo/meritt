$(document).ready(function(){
	//var municipios = $.getJSON("json/municipios2.json");

	var municipios = 
	[
	  {
	    "_id": 0,
	    "nome": "Imaruí",
	    "escolas": 12,
	    "fluxo": 0.54,
	    "aprendizado": 3.92,
	    "alerta": 0.76,
	    "atencao": 0.14,
	    "melhorar": 0.23,
	    "manter": 0.12
	  },
	  {
	    "_id": 1,
	    "nome": "Ibiam",
	    "escolas": 25,
	    "fluxo": 0.35,
	    "aprendizado": 9.38,
	    "alerta": 0.75,
	    "atencao": 0.29,
	    "melhorar": 0.49,
	    "manter": 0.4
	  },
	  {
	    "_id": 2,
	    "nome": "Imaruí",
	    "escolas": 17,
	    "fluxo": 0.91,
	    "aprendizado": 2.61,
	    "alerta": 0.42,
	    "atencao": 0.06,
	    "melhorar": 0.66,
	    "manter": 0.5
	  },
	  {
	    "_id": 3,
	    "nome": "Águas de Chapecó",
	    "escolas": 4,
	    "fluxo": 0.27,
	    "aprendizado": 9.52,
	    "alerta": 0.82,
	    "atencao": 0.06,
	    "melhorar": 0.78,
	    "manter": 0.21
	  },
	  {
	    "_id": 4,
	    "nome": "Içara",
	    "escolas": 19,
	    "fluxo": 0.41,
	    "aprendizado": 8.02,
	    "alerta": 0.51,
	    "atencao": 0.63,
	    "melhorar": 0.68,
	    "manter": 0.08
	  },
	  {
	    "_id": 5,
	    "nome": "Pinheiro Preto",
	    "escolas": 11,
	    "fluxo": 0.42,
	    "aprendizado": 4.75,
	    "alerta": 1,
	    "atencao": 0.51,
	    "melhorar": 0.79,
	    "manter": 0.34
	  },
	  {
	    "_id": 6,
	    "nome": "Iraceminha",
	    "escolas": 30,
	    "fluxo": 0.44,
	    "aprendizado": 4.47,
	    "alerta": 0.19,
	    "atencao": 0.9,
	    "melhorar": 0.16,
	    "manter": 0.69
	  },
	  {
	    "_id": 7,
	    "nome": "Planalto Alegre",
	    "escolas": 16,
	    "fluxo": 0.19,
	    "aprendizado": 2.27,
	    "alerta": 0.02,
	    "atencao": 0,
	    "melhorar": 1,
	    "manter": 0.34
	  },
	  {
	    "_id": 8,
	    "nome": "Palmeira",
	    "escolas": 27,
	    "fluxo": 0.63,
	    "aprendizado": 2.54,
	    "alerta": 0.31,
	    "atencao": 0.08,
	    "melhorar": 0,
	    "manter": 0.31
	  },
	  {
	    "_id": 9,
	    "nome": "Agrolândia",
	    "escolas": 4,
	    "fluxo": 0.92,
	    "aprendizado": 9.15,
	    "alerta": 0.39,
	    "atencao": 0.06,
	    "melhorar": 0.02,
	    "manter": 0.28
	  },
	  {
	    "_id": 10,
	    "nome": "Indaial",
	    "escolas": 16,
	    "fluxo": 0.15,
	    "aprendizado": 8.08,
	    "alerta": 0.12,
	    "atencao": 0.68,
	    "melhorar": 0.46,
	    "manter": 0.05
	  },
	  {
	    "_id": 11,
	    "nome": "Penha",
	    "escolas": 9,
	    "fluxo": 0.33,
	    "aprendizado": 4.87,
	    "alerta": 0.05,
	    "atencao": 0.1,
	    "melhorar": 0.14,
	    "manter": 0.05
	  },
	  {
	    "_id": 12,
	    "nome": "Ibicaré",
	    "escolas": 8,
	    "fluxo": 0.45,
	    "aprendizado": 2.35,
	    "alerta": 0.58,
	    "atencao": 0.47,
	    "melhorar": 0.12,
	    "manter": 0.83
	  },
	  {
	    "_id": 13,
	    "nome": "Papanduva",
	    "escolas": 14,
	    "fluxo": 0.2,
	    "aprendizado": 3.87,
	    "alerta": 0.14,
	    "atencao": 0.07,
	    "melhorar": 0.72,
	    "manter": 0.31
	  },
	  {
	    "_id": 14,
	    "nome": "Iomerê",
	    "escolas": 3,
	    "fluxo": 0.35,
	    "aprendizado": 3.71,
	    "alerta": 0.75,
	    "atencao": 0.92,
	    "melhorar": 0.75,
	    "manter": 0.66
	  },
	  {
	    "_id": 15,
	    "nome": "Penha",
	    "escolas": 24,
	    "fluxo": 0.73,
	    "aprendizado": 7.39,
	    "alerta": 0.83,
	    "atencao": 0.76,
	    "melhorar": 0.57,
	    "manter": 0.22
	  },
	  {
	    "_id": 16,
	    "nome": "Pedras Grandes",
	    "escolas": 18,
	    "fluxo": 0.81,
	    "aprendizado": 8.31,
	    "alerta": 0.57,
	    "atencao": 0.67,
	    "melhorar": 0.86,
	    "manter": 0.85
	  },
	  {
	    "_id": 17,
	    "nome": "Imaruí",
	    "escolas": 14,
	    "fluxo": 0.4,
	    "aprendizado": 3.45,
	    "alerta": 0.34,
	    "atencao": 0.6,
	    "melhorar": 0.38,
	    "manter": 0.32
	  },
	  {
	    "_id": 18,
	    "nome": "Palmeira",
	    "escolas": 2,
	    "fluxo": 0.55,
	    "aprendizado": 7.42,
	    "alerta": 0.19,
	    "atencao": 0.56,
	    "melhorar": 0.08,
	    "manter": 0.01
	  },
	  {
	    "_id": 19,
	    "nome": "Peritiba",
	    "escolas": 25,
	    "fluxo": 0.54,
	    "aprendizado": 6.94,
	    "alerta": 0.88,
	    "atencao": 0.99,
	    "melhorar": 0.13,
	    "manter": 0.13
	  },
	  {
	    "_id": 20,
	    "nome": "Itá",
	    "escolas": 12,
	    "fluxo": 0.6,
	    "aprendizado": 7.72,
	    "alerta": 0,
	    "atencao": 0.72,
	    "melhorar": 0.29,
	    "manter": 0.72
	  },
	  {
	    "_id": 21,
	    "nome": "Iporã do Oeste",
	    "escolas": 24,
	    "fluxo": 0.35,
	    "aprendizado": 6.57,
	    "alerta": 0.71,
	    "atencao": 0.63,
	    "melhorar": 0.38,
	    "manter": 0.07
	  },
	  {
	    "_id": 22,
	    "nome": "Içara",
	    "escolas": 12,
	    "fluxo": 0.51,
	    "aprendizado": 7.53,
	    "alerta": 0.65,
	    "atencao": 0.2,
	    "melhorar": 0.31,
	    "manter": 0.76
	  },
	  {
	    "_id": 23,
	    "nome": "Paulo Lopes",
	    "escolas": 5,
	    "fluxo": 0.72,
	    "aprendizado": 5.43,
	    "alerta": 0.82,
	    "atencao": 0.87,
	    "melhorar": 0.09,
	    "manter": 0.54
	  },
	  {
	    "_id": 24,
	    "nome": "Ipumirim",
	    "escolas": 18,
	    "fluxo": 0.67,
	    "aprendizado": 5.78,
	    "alerta": 0.1,
	    "atencao": 0.39,
	    "melhorar": 0.29,
	    "manter": 0.14
	  },
	  {
	    "_id": 25,
	    "nome": "Frei Rogério",
	    "escolas": 25,
	    "fluxo": 0.85,
	    "aprendizado": 2.77,
	    "alerta": 0.96,
	    "atencao": 0.04,
	    "melhorar": 0.49,
	    "manter": 0.23
	  },
	  {
	    "_id": 26,
	    "nome": "Formosa do Sul",
	    "escolas": 10,
	    "fluxo": 0.48,
	    "aprendizado": 8.67,
	    "alerta": 0.81,
	    "atencao": 0.91,
	    "melhorar": 0.66,
	    "manter": 0.45
	  },
	  {
	    "_id": 27,
	    "nome": "Águas de Chapecó",
	    "escolas": 9,
	    "fluxo": 0.17,
	    "aprendizado": 8.23,
	    "alerta": 0.01,
	    "atencao": 0.69,
	    "melhorar": 0.63,
	    "manter": 0.29
	  },
	  {
	    "_id": 28,
	    "nome": "Frei Rogério",
	    "escolas": 7,
	    "fluxo": 0.62,
	    "aprendizado": 6.48,
	    "alerta": 0.56,
	    "atencao": 0.89,
	    "melhorar": 0.58,
	    "manter": 0.65
	  },
	  {
	    "_id": 29,
	    "nome": "Pedras Grandes",
	    "escolas": 22,
	    "fluxo": 0.99,
	    "aprendizado": 9.05,
	    "alerta": 0.14,
	    "atencao": 0.31,
	    "melhorar": 0.67,
	    "manter": 0.15
	  },
	  {
	    "_id": 30,
	    "nome": "Irati",
	    "escolas": 25,
	    "fluxo": 0.47,
	    "aprendizado": 8.47,
	    "alerta": 0.84,
	    "atencao": 0.45,
	    "melhorar": 0.55,
	    "manter": 0.47
	  },
	  {
	    "_id": 31,
	    "nome": "Palhoça",
	    "escolas": 11,
	    "fluxo": 0.65,
	    "aprendizado": 9.72,
	    "alerta": 0.13,
	    "atencao": 0.19,
	    "melhorar": 0.09,
	    "manter": 0.87
	  },
	  {
	    "_id": 32,
	    "nome": "Imaruí",
	    "escolas": 10,
	    "fluxo": 0.6,
	    "aprendizado": 3.61,
	    "alerta": 0.41,
	    "atencao": 0.35,
	    "melhorar": 0.99,
	    "manter": 0.71
	  },
	  {
	    "_id": 33,
	    "nome": "Imbuia",
	    "escolas": 23,
	    "fluxo": 0.54,
	    "aprendizado": 3.72,
	    "alerta": 0.15,
	    "atencao": 0.61,
	    "melhorar": 0.75,
	    "manter": 0.67
	  },
	  {
	    "_id": 34,
	    "nome": "Anchieta",
	    "escolas": 30,
	    "fluxo": 0.8,
	    "aprendizado": 4.67,
	    "alerta": 0.84,
	    "atencao": 0.18,
	    "melhorar": 0.72,
	    "manter": 0.03
	  },
	  {
	    "_id": 35,
	    "nome": "Painel",
	    "escolas": 9,
	    "fluxo": 0.92,
	    "aprendizado": 5.31,
	    "alerta": 0.1,
	    "atencao": 0.09,
	    "melhorar": 0.5,
	    "manter": 0.69
	  },
	  {
	    "_id": 36,
	    "nome": "Pedras Grandes",
	    "escolas": 9,
	    "fluxo": 0.22,
	    "aprendizado": 9.45,
	    "alerta": 0.14,
	    "atencao": 0.15,
	    "melhorar": 0.38,
	    "manter": 0
	  },
	  {
	    "_id": 37,
	    "nome": "Ibicaré",
	    "escolas": 11,
	    "fluxo": 0.35,
	    "aprendizado": 7.51,
	    "alerta": 0.32,
	    "atencao": 0.06,
	    "melhorar": 0.57,
	    "manter": 0.72
	  },
	  {
	    "_id": 38,
	    "nome": "Painel",
	    "escolas": 5,
	    "fluxo": 0.7,
	    "aprendizado": 4.55,
	    "alerta": 0.28,
	    "atencao": 0.76,
	    "melhorar": 0.28,
	    "manter": 0.94
	  },
	  {
	    "_id": 39,
	    "nome": "Palmitos",
	    "escolas": 26,
	    "fluxo": 0.9,
	    "aprendizado": 4.18,
	    "alerta": 0.2,
	    "atencao": 0.11,
	    "melhorar": 0.68,
	    "manter": 0.24
	  },
	  {
	    "_id": 40,
	    "nome": "Imbituba",
	    "escolas": 28,
	    "fluxo": 0.41,
	    "aprendizado": 7.19,
	    "alerta": 0.91,
	    "atencao": 0.48,
	    "melhorar": 0.41,
	    "manter": 0.45
	  },
	  {
	    "_id": 41,
	    "nome": "Ipira",
	    "escolas": 13,
	    "fluxo": 0.24,
	    "aprendizado": 6.19,
	    "alerta": 0.49,
	    "atencao": 0.68,
	    "melhorar": 0.22,
	    "manter": 0.9
	  },
	  {
	    "_id": 42,
	    "nome": "Piratuba",
	    "escolas": 22,
	    "fluxo": 0.65,
	    "aprendizado": 3.05,
	    "alerta": 0.22,
	    "atencao": 0.38,
	    "melhorar": 0.32,
	    "manter": 0.49
	  },
	  {
	    "_id": 43,
	    "nome": "Pinhalzinho",
	    "escolas": 4,
	    "fluxo": 0.23,
	    "aprendizado": 6.46,
	    "alerta": 0.44,
	    "atencao": 0.53,
	    "melhorar": 0,
	    "manter": 0.34
	  },
	  {
	    "_id": 44,
	    "nome": "Itá",
	    "escolas": 13,
	    "fluxo": 0.23,
	    "aprendizado": 8.7,
	    "alerta": 0.95,
	    "atencao": 0.4,
	    "melhorar": 0.21,
	    "manter": 0.19
	  },
	  {
	    "_id": 45,
	    "nome": "Alfredo Wagner",
	    "escolas": 13,
	    "fluxo": 0.4,
	    "aprendizado": 2.54,
	    "alerta": 0.93,
	    "atencao": 0.96,
	    "melhorar": 1,
	    "manter": 0.89
	  },
	  {
	    "_id": 46,
	    "nome": "Angelina",
	    "escolas": 14,
	    "fluxo": 0.29,
	    "aprendizado": 5.09,
	    "alerta": 0.47,
	    "atencao": 0,
	    "melhorar": 0.46,
	    "manter": 0.56
	  },
	  {
	    "_id": 47,
	    "nome": "Irani",
	    "escolas": 22,
	    "fluxo": 0.62,
	    "aprendizado": 3.18,
	    "alerta": 0.39,
	    "atencao": 0.34,
	    "melhorar": 0.94,
	    "manter": 0.45
	  },
	  {
	    "_id": 48,
	    "nome": "Abelardo Luz",
	    "escolas": 17,
	    "fluxo": 0.34,
	    "aprendizado": 6.42,
	    "alerta": 0.4,
	    "atencao": 0.33,
	    "melhorar": 0.98,
	    "manter": 0.24
	  },
	  {
	    "_id": 49,
	    "nome": "Ibicaré",
	    "escolas": 27,
	    "fluxo": 0.63,
	    "aprendizado": 7.03,
	    "alerta": 0.69,
	    "atencao": 0.94,
	    "melhorar": 1,
	    "manter": 0.65
	  }
	]

	montaTabela(municipios);
});

var montaTabela = function(registros){

	$('#table-municipios tbody').empty();

	$.each(registros, function(i, item){

		var html = '<tr>' + 
			'<td><span class="municipio">'+item.nome+'</span><span class="escolas">'+item.escolas+' escolas</span></td>'+
			'<td>' + item.fluxo + ' x ' + item.aprendizado + ' = ' + (item.fluxo*item.aprendizado).toFixed(2) + '</td>' +
			'<td>'+ geraGrafico('alerta', item.alerta) +'</td>' +
			'<td>'+ geraGrafico('atencao', item.atencao) +'</td>' +
			'<td>'+ geraGrafico('melhorar', item.melhorar) +'</td>' +
			'<td>'+ geraGrafico('manter', item.manter) +'</td>' +
			'</tr>';

		console.log(html);

		$('#table-municipios tbody').append(html);
		//var oi = grafico.clone().addClass('atencao').attr('data-progresso', '12');
		//console.log(oi);

	});
}

var geraGrafico = function(classe, valor){
	var html = '<div class="progresso '+ classe +'" data-progresso="'+(valor*100).toFixed(0)+'">' +
					'<div class="mascara inteira"><div class="preenchimento"></div></div>' +
					'<div class="mascara metade"><div class="preenchimento"></div><div class="preenchimento fix"></div></div>' +
					'</div>'	;
	return html;
}