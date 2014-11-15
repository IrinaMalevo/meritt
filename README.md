meritt
======

Arquivos do desafio técnico para a Meritt.


<h2>Estrutura do projeto</h2>
O projeto consiste em um arquivo HTML (index), arquivos Less, um arquivo CSS, dois arquivos Javascript, arquivos de fontes e imagens, todos distribuídos em pastas específicas.

O arquivo HTML possui todo o código da página e a chamada de um arquivo CSS, que contém todo o conteúdo dos arquivos Less reunidos e compilados.

Os arquivos Less estão dividos em:
<ul>
  <li>Um arquivo "reset" com regras utilizadas para igualar a aparência dos estilos em todos os navegadores</li>
  <li>Um arquivo "mixins" com funções e atalhos utilizados no Less, que construí em alguns anos de trabalho</li>
  <li>Um arquivo "colors" com a definição de variáveis para todas as cores utilizadas no projeto</li>
  <li>Um arquivo "base" com regras gerais para o estilo e algumas classes e mixins úteis</li>
  <li>Um arquivo "font-awesome" com as variáeis utilizadas pela biblioteca de ícones</li>
  <li>Três arquivos "320", "768" e "1024" com código específico das versões para telas menores</li>
  <li>Uma arquivo "style" que reúne todos os anteriores e tem as regras para o estilo de toda a página</li>
  <li>Um arquivo "radial" responsável por gerar as classes para todos os valores dos gráficos na tabela do desafio #2.</li>
</ul>

<h1>Desafio #1</h1>
<h2>Uso de imagens</h2>
Um dos requisitos do projeto era não utilizar imagens na interface, por isso optei pela biblioteca "Font Awesome" como recurso para os ícones. A biblioteca foi de fácil configuração e possuía ícones equivalentes ao design apresentado.
Foram usadas apenas três imagens: o ícone do "logo" e as duas figuras dos livros presentes na página. Considerei que a ausência delas teria um impacto considerável na apresentação da página.

<h2>Abordagens em telas menores</h2>
Na versão para 1024 píxels de largura de tela, foram realizadas poucas mudanças na interface - quase imperceptíveis.

Na versão de 768 pixels, optei por uma exibição em abas de Características e Benefícios.

Na versão para telas menores (a partir de 320 pixels), fiz uso de um <em>accordion</em> para abrigar as listas de Características e Benefícios. Na outras listas, presentes no bloco do livro, usei a lista com rolagem horizontal através de swype. Para a técnica, usei apenas CSS e funcionou sem problermas no iPhone.

<h2>Visualização em diferentes resoluções</h2>
Para melhor visualização do projeto em todos os dispositivos, coloquei todos os arquivos do repositório em meu servidor pessoal. Pode ser testado no link: <a href="http://afonsoalban.com/meritt/">http://afonsoalban.com/meritt/</a>.

Também criei uma página com acesso facilitado a três configurações de tamanho de tela, disponível em <a href="http://afonsoalban.com/meritt/versoes.html">http://afonsoalban.com/meritt/versoes.html</a>.

<h2>Arquivos utilizados</h2>
<ul>
	<li>index.html e versoes.html</li>
	<li>css/style.html</li>
	<li>js/functions.js e js/mediaCheck-min.js</li>
	<li>todos os arquivos do diretório less, exceto radial.less</li>
	<li>arquivos dos diretórios fonts e images como apoio, no layout</li>
</ul>

<h1>Desafio #2</h1>
<p>O código para esta página foi incrementado no código do desafio anterior, por isso parte do estilo está no mesmo arquivo style.less/style.css usado no desafio #1. Da mesma forma, o código usado para tamanhos de tela menores foi acrescentado nos arquivos Less correspondentes.</p>

<p>O arquivo JSON que serve de base para o preenchimento da tabela foi gerado aleatoriamente para fins de exemplo. Sendo assim, existem cidades repetidas e a soma dos valores apresentados nas porcentagens muitas vezes ultrapassa 100.</p>

<p>A página com a tabela é responsiva e também pode ser visualizada no meu servidor pessoal, nos links de <a href="http://afonsoalban.com/meritt/tabela.html">página inteira</a> e <a href="http://afonsoalban.com/meritt/versoes.html">diferentes resoluções</a>.</p>

<h2>Arquivos utilizados</h2>
<ul>
	<li>tabela.html</li>
	<li>todos os arquivos no diretório css (um para o estilo principal e outro para os gráficos)</li>
	<li>js/tabela.js</li>
	<li>todos os arquivos do diretório less</li>
	<li>arquivos dos diretórios fonts e images como apoio, no layout</li>
</ul>