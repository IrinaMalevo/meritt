var municipios;

$(document).ready(function(){
	$.getJSON("json/municipios2.json", function(data){
		municipios = data.municipios

		// como os dados do JSON foram gerados aleatoriamente para essa tarefa, achei melhor ordenar os municípios alfabeticamente antes de exibir
		municipios.sort( ordenarPorNome('nome') );

		//console.log(municipios);
		montaTabela(municipios);
	});

	

	// executa a busca cada vez que algo é digitado no input
	$('#filtro').on('input', function(){
		busca( $(this).val() );
	});
});

var montaTabela = function(registros){

	$('#table-municipios tbody').empty();

	$.each(registros, function(i, item){

		// escreve o HTML de cada linha, com o respectivo conteúdo
		// um ID é atribuído a cada linha, o que permite aplicar estilos (ou comportamentos) para municípios específicos
		var html = '<tr id="municipio-'+item._id+'">' + 
			'<td><span class="municipio">'+item.nome+'</span><span class="escolas">'+item.escolas+' escolas</span></td>'+
			'<td>' + item.fluxo + ' x ' + item.aprendizado + ' = ' + (item.fluxo*item.aprendizado).toFixed(2) + '</td>' +
			'<td>'+ geraGrafico('alerta', item.alerta) +'</td>' +
			'<td>'+ geraGrafico('atencao', item.atencao) +'</td>' +
			'<td>'+ geraGrafico('melhorar', item.melhorar) +'</td>' +
			'<td>'+ geraGrafico('manter', item.manter) +'</td>' +
			'</tr>';

		//console.log(html);

		$('#table-municipios tbody').append(html);
	});
}

// essa função escreve o código HTML necessário para gerar cada gráfico das porcentagens, completando com a classe correta (que define a COR) e o valor
var geraGrafico = function(classe, valor){
	var html = '<div class="progresso '+ classe +'" data-progresso="'+(valor*100).toFixed(0)+'">' +
			'<div class="mascara inteira"><div class="preenchimento"></div></div>' +
			'<div class="mascara metade"><div class="preenchimento"></div><div class="preenchimento fix"></div></div>' +
			'</div>'	;
	return html;
}

// função que realiza a busca
var busca = function(termo){

	var resultado = [];

	$.each(municipios, function(i, item){
		var nome = item.nome;
		var matches = nome.match( new RegExp(termo, 'i') );

		if(matches){
			resultado.push(item);
		}
	});

	if(resultado.length > 0){
		montaTabela(resultado);
	}else{
		$('#table-municipios tbody').empty().append('<tr><td colspan="6">Não há resultados para o termo digitado.</td></tr>');
	}
}

// função para ordenar o array por qualquer propriedade do objeto Json
var ordenarPorNome = function(key){
	'use strict';
	
	return function(a,b){
		var status = 0;
		
		if(a[key] < b[key]){
			status = -1;
		} else if(a[key] > b[key]) {
			status = 1;
		}

		return status;
	}
}


/*
 CÓDIGO JSON GERADO ALEATORIAMENTE

 json-generator.com

 TEMPLATE:
 [
  '{{repeat(50)}}',
  {
    _id: '{{index()}}',
    nome: '{{random("Abdon Batista", "Abelardo Luz", "Agrolândia", "Agronômica", "Água Doce", "Águas Frias", "Águas Mornas", "Alfredo Wagner", "Alto Bela Vista", "Anchieta", "Angelina", "Anita Garibaldi", "Chapecó", "Faxinal dos Guedes", "Flor do Sertão", "Florianópolis", "Formosa do Sul", "Forquilhinha", "Fraiburgo", "Frei Rogério", "Ibiam", "Ibicaré", "Ibirama", "Içara", "Ilhota", "Imaruí", "Imbituba", "Imbuia", "Indaial", "Iomerê", "Ipira", "Iporã do Oeste", "Ipuaçu", "Ipumirim", "Iraceminha", "Irani", "Irati", "Irineópolis", "Itá", "Paial", "Painel", "Palhoça", "Palma Sola", "Palmeira", "Palmitos", "Papanduva", "Paraíso", "Passo de Torres", "Passos Maia", "Paulo Lopes", "Pedras Grandes", "Penha", "Peritiba", "Pescaria Brava", "Petrolândia", "Pinhalzinho", "Pinheiro Preto", "Piratuba", "Planalto Alegre", "Pomerode")}}',
    escolas: '{{integer(2, 30)}}',
    fluxo: '{{floating(0.1, 1, 2)}}',
    aprendizado: '{{floating(2, 10, 2)}}',
    alerta: '{{floating(0, 1, 2)}}',
    atencao: '{{floating(0, 1, 2)}}',
    melhorar: '{{floating(0, 1, 2)}}',
    manter: '{{floating(0, 1, 2)}}'
  }
]

*/