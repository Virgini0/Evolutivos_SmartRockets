# Evolutivos_SmartRockets
Projeto com base em algoritmos genéticos.
O vídeo de apresentação encontra-se neste mesmo repositório.
Data de desenvolvimento: 2020-1.

# APRESENTAÇÃO EM VÍDEO:
https://drive.google.com/file/d/1RTAmSo8a1OeqWQXv5Fyt4MmtRLO5XXIz/view?usp=sharing

Integrantes: Diego da Silva Parra, Mateus Virginio Silva, Murilo Luz Stucki e Tainá Andrello Piai.

Resumo:
Foi escolhido como projeto o problema real de Smart Rockets, o qual se baseia em algoritmos genéticos para os foguetes (rockets) alcançarem o alvo mais vezes, ou seja, os foguetes vão aprendendo com base nas gerações passadas, como alcançar esse alvo. O intuito é mostrar que conforme vão se passando as gerações, a eficiência de um foguete alcançar o alvo tende a aumentar, de tal forma que alcance os 100%, ou seja, todos os foguetes alcancem o alvo se tornando assim foguetes inteligentes ou Smart Rockets.

Projeto:
  No projeto foram utilizadas ferramentas de desenvolvimento Web, html, css, javascript e até a biblioteca P5js para a criação de experiências gráficas e interativas, com base nos princípios básicos de processamento.
  
Index.html - Nesse arquivo .html temos a base da página, contendo os imports dos scrips javascript no body além de uma tabela com as informações que consideramos relevantes e um contador de vida de cada geração.
  
Dna.js - Nesse arquivo temos algoritmos genéticos como crossover e mutação dos foguetes. Tais informações sobre o dna serão usadas para as próximas gerações de foguetes.

Population.js - Nesse arquivo .js temos a avaliação do fitness e a criação da geração, pegando aleatoriamente os pais e gerando o filho. Para explicar melhor a parte de fitness, um foguete com alto valor de fitness muito provavelmente estará na mating pool, piscina de acasalamento,  que é um array que é usado para gerar as próximas gerações.

Rocket.js - Nesse arquivo além do calculo de fitness do foguete, temos também a criação da fisica do objeto.

Sketch.js - Nesse arquivo .js temos o esqueleto do projeto. Nele faz-se a parte gráfica com as funções de draw() e setup(). Nele tem-se a criação gráfica, por exemplo, do alvo e da barreira.

OBS: Para a table, colocamos um atraso na contagem de gerações, de modo a diminuir a assincronidade na hora da exibição dos dados. Se não houver esse atraso, quando atualiza os dados da coluna 'targets' a coluna 'generation' mostrava a geração a seguir, sem necessariamente, em algum momento mostrar a 'generation' certa para aquela execução.
