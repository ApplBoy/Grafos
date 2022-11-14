# Relatório: Implementação de Grafos.
#### Participantes: Saulo José, Eduardo Henrique, Jaires Filho, João Pedro, Henderson Martins
## Quais foram as dificuldades na criação de grafos em Expo?

## Escolha da Linguagem

Nosso grupo acadêmico decidiu escolher primeiramente a linguagem C como foco.

Mas após algumas discussões, decidimos utilizar uma linguagem de programação incomum ao aprendizado aos iniciante da Universidade Federal de Jataí.

E como boa parte dos nossos intrigantes possuem uma habilidade considerável com o JavaScript e o Expo (React-Native), decidimos utilizar as mesmas.

Expo, que a mesma utiliza JavaScript, é uma linguagem de programação/marcação que permite uma maior compatibilidade com os dispositivos, permitindo tanto uso Web no Desktop, quanto com uso no iOS e Android.

## Criação do Grafo

Nossas dificuldades começou com a linguagem em si, visto que mesmo tendo prática com a mesma, ainda tivemos que "desenferrujar-se" da falta de prática com a mesma.

Enfim, o primeiro obstáculo para a criações de algorítimos em grafos, são os próprios grafos em si.

Decidimos criar uma classe grafos e aplicarmos ela em uma variável no aplicativo, e adicionamos alguns métodos e objetos que seriam os vetores de Adjacência e, mais utilizado na frente, de Pesos.

Depois, adicionamos os métodos de criação de vértices e arestas conectando dois vértices e a opção de deixar o grafo em dirigido ou não e com pesos.

Em seguida, criamos o método de Printar o Grafo no `console.log` utilizado pelo JS. E ao mesmo tempo...

## Front-End do Aplicativo em Expo

Uma parte de nosso grupo estava implementado a parte front-end do aplicativo, utilizando-se da praticidade e compatibilidade que o Expo trás aos usuários (e desenvolvedores).

A nossa pergunta nessa parte seria: Como implantamos uma representação visual ao nosso aplicativo de Grafos?

Bem, começamos com o de sempre, criamos um mockup do app, e fomos realizando algumas melhorias e adicionando conteúdo aos poucos enquanto programávamos o back-end do programa que o mesmo por enquanto o programa utilizava do terminal e console dos dispositivos.

## Busca em Largura

Agora, ao grande prato principal do nosso código, os algoritmos.

Começamos com o básico, Busca em Largura, para usar a busca em largura, precisamos de uma lista, então criamos uma classe `Queue` que servirá como a mesma, ela tem os métodos de adicionar, remover, ver o último da lista, etc...

Após realizado a classe, aí que começamos a criar o método da Busca em Largura, nomeada no código como `bfs()`, esse método recebe o nome de um vértice inicial;

Em seguida é criado um objeto de vértices `visitados` vazio, um vetor que servirá de retorno sobre os resultados, e a fila. Enfim, preparamos manualmente o vértice inicial no código, e utilizamos uma variável misteriosa chamada de `j`, ela serve como um ponteiro apontando para a posição do vértice na lista.

Um dos maiores problemas foi arrumar o valor da distância do vértice inicial, após algumas horas realizando patches, chegamos à uma conclusão de que ao utilizar o ponteiro `j`, podemos acessar o valor do vértice mãe de um vértice adjacente, então decidimos pegar o valor da sua distância anterior, somar 1 e armazenar ele no nosso vetor de retorno.

Uma solução não muito suave para o nosso problema, mas que resolveu o erro de lógica dessa função.

## Conexividade

Admito, roubei um pouco nesse objetivo, criei o método `ehConexo()` que simplesmente recebe o nome de um vértice, realiza o algoritmo da `bfs()` e pega o tamanho de elementos advinda desse método, em seguida compara ele com a quantidade de vértices, se for diferente, não é conexo.

## Busca em Largura com Backtracking

Semelhante ao `bfs()`, este método recebe um vértice inicial, cria um objeto de elementos `visitados` nulo, um vetor de retorno dos dados, e agora, ao invés da famosa variável `j`, substituímos pela outra variável utilizada no método anterior: `size`;

Um fato muito enfático desse método é que se utiliza as temidas recursividades, por mais que sejam danosas, a linguagem realmente permitiu uma tão desejada facilidade de implementação.

Alguns erros de lógica e de dados depois, chegamos a conclusão que a função abandonava totalmente a verificação recursiva de alguns vértices, uma análise mais fundo, percebemos que ela não tava repetindo a verificação em vértices com um caminho menor após entrarem em um caminho mais extenso por meio da recursividade, isso ocorria pois a vértice já fora marcada como `visitado`.

Nosso patch para resolver esse pequeno delito foi criar verificação caso encontre um vértice já marcado, caso o seu valor da distância em relação ao início é maior com o do atualmente calculado, os dados são alterados para incluir esse caminho menor e é realizada a recursividade novamente nesse vértice, alterando em seguida os valores dos outros vértices por esse caminho menor.

## Caminho Menor

Aqui em diante a curva de dificuldade aumenta exponencialmente, este método ele é diferente aos outros supracitados, pois ele começa recebendo dois vértices que logo serão ambos utilizados.

A primeira execução desse caminho é realizar um `dfs()`, ou seja, uma `Busca em Largura com Backtracking` no `verticeInicial`, e aplicar a matriz resultante da `dfs()` numa variável, isso foi feito com a finalidade de examinar quais vértices estão mais distantes ou que possuem uma mesma distância que o `verticeFinal` em relação ao `verticeInicial`.

Maior dificuldade desse método começa a aparecer por aqui, elas incluem, mas não se limitam a: Recontando os vértices adjacentes ao `verticeInicial` mais de uma vez, Não marcando todos os caminhos realizados e Marcando exatamente duas vezes o `verticeFinal`;

Após zerar o valor do caminho desses pontos e remover a marcação deles no caminho, fizemos um sistema parecido com a estrutura da `bfs()`, mas começando do `verticeFinal` até o `verticeInicial`, onde ele realiza uma soma do caminho filtrado até o `verticeInicial` com o `somaCaminho()`

Após alguns minutos de fixes e patches, o programa estava rodando como o testado e esperado, mas por ser uma implementação ainda recente, bugs podem ocorrer com mais frequência do que os outros métodos.

## Algoritmo de Prim

Agora para o método de nossa escolha, com a maior dificuldade de todos os métodos anteriores, esse algoritmo foi reescrito totalmente por nós aproximadamente 4 vezes, até conseguirmos um resultados satisfatórios com o método.

Primeiramente, devemos criar algumas dependências rápidas do Prim, criamos a lista dinâmica **com prioridade** que está presente na classe `PriorityQueue`, que a mesma utiliza uma outra classe `QElement`, a prioridade dessa lista que vai ser utilizada é os pesos das arestas.

O nosso método então realiza uma estrutura semelhante ao `bsf()`, ele marca e salva em uma matriz que servirá de retorno após a finalização, e depois disso insere os vértices adjacentes na lista com prioridade que filtra os menores pesos para serem executados primeiro.

Definitivamente o maior desafio de todo o projeto foi implementar esse algoritmo, pois nas 3 tentativas de implementação nenhuma seguia o caminho correto ou a lógica possuía algum pequeno erro de compreensão e interpretação.

Mas após algumas horas e uma noite inteira, conseguimos implementar o algoritmo de forma concreta e com resultados satisfatórios.

---

Enfim, foi um bom projeto para se realizar, mesmo que custasse bastante do nosso foco, readquirimos algumas de nossas habilidade com Expo e JavaScript, além de compreendermos melhor as funções dentro do Back-end e Front-end de um aplicativo Web e Android.

---

[Clique Aqui](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40oswoen/segunndo_projeto-19c6c80b27754f03befadbe201d3b30f-signed.apk) para fazer o Download do .apk

