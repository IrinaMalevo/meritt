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
</ul>

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
