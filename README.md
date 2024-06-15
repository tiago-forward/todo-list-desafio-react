# Desafio React (Rocketseat) - ToDo List

## Tabela do Conteudo

<ul>
<li><a href="#introdução">Introdução</a></li>
<li><a href="#objetivo">Objetivo</a></li>
<!-- <li><a href="#desafio">Desafio</a></li> -->
<li><a href="#status">Status</a></li>
<li><a href="#curiosidade">Curiosidade</a></li>
<li><a href="#tecnologias-utilizadas">Tecnologias</a></li>
<!-- <li><a href="#instalando-e-executando-o-projeto">Instalação</a></li> -->
<!-- <li><a href="#acessando-o-site">Acessando o site</a></li> -->
</ul>

## Introdução

Esse desafio faz parte do curso da Rocketseat, ele serve para nos desafiarmos e nos preparar para o mercado de trabalho. Irei resolver esse desafio e compartilhar minhas experiências.

## Objetivo

Desenvolver uma aplicação de controle de tarefas no estilo to-do list, que contém as seguintes funcionalidades:

    - Adicionar uma nova tarefa ✅
    - Marcar e desmarcar uma tarefa como concluída ✅
    - Remover uma tarefa da listagem ✅
    - Mostrar o progresso de conclusão das tarefas ✅

<!-- ## Desafio

Durante o desenvolvimento desse projeto, meu maior desafio foi em como eu iria armazenar da melhor forma os dados requisitados da API e compartilhar com meus demais componentes, pensando nisso eu implementei a seguinte solução:

  - Criei um contexto onde eu fiz a chamada para API, e com ela eu pude armazenar os nomes de cada pokemon da API, pois a URL principal só me retornava apenas 2 resultados;

    <img src="./src/assets/pokeAPI.png" alt="Code image pokeAPI"> 

  - No meu contexto também pude salvar o estado da quantidade de pokemons que será exibido inicialmente em minha HomePage. Na home, eu alterei o estado a cada novo clique no botão 'Carregar mais' acrescentando mais 10 pokemons.

    <img src="./src/assets/pokemonContext.png" alt="Code image pokemon context">

O segunto ponto desafiador foi em armazenar os dados de cada pokemon:

  - Nesse código eu crio um array de objetos com cada dado do pokemon que está sendo identificado pelo `index`, e exibindo na tela no `return` abaixo.

    <img src="./src/assets/dataPokemon.png" alt="Code image data pokemon">

Terceiro e último ponto importante do meu código, foi ao acessar os dados de descrição de cada habilidade do pokemon:

  - No componente `dataPokemon` eu já tinha armazenado a url de cada habilidade;

  <img src="./src/assets/pokeAPIAbilities.png" alt="Code image pokeAPI Ability">

  - Então eu criei um `useEffect` para acessar essa nova URL de habilidades e buscar seus dados do servidor, então adicionei em um novo estado sua descrição, também está sendo retornado neste novo componente o valor da habilidade `ability`;

  <img src="./src/assets/abilitiesPokemon.png" alt="Code image abilities pokemon">

  - Com isso para cada habilidade que o pokemon tiver, esse componente receberá os dados do componente pai e será mapeado para mostrar em tela o título e a descrição da habilidade. -->

## Status

Desafio Iniciado. 🥰

<!-- ### Layout Desktop / Mobile -->

<!-- <img src="./src/assets/layout-descktop.gif" alt="Gif do layout descktop">
<img src="./src/assets/layout-mobile.gif" alt="Gif do layout mobile"> -->

## Curiosidade

Serão abordados os conceitos abaixo para a resolução desse desafio:

- Estados
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- TypeScript
- React
- GIT


<!-- ## Instalando e executando o projeto

1º Clone o repositório do projeto em HTTPS ou SSH com sua SSH key

HTTPS
```bash
  git clone 
```

SSH
```bash
  git clone
```

Em sua máquina, crie uma nova pasta e execute o git, e em seguida cole um dos links acima.
<br>

2º Entre no diretório do projeto na qual foi clonado

```bash
  cd todo-list-desafio-react
```

3º Execute o comando abaixo para instalar todas as dependências utilizadas

```bash
  npm install
```

4º Inicialize a aplicação para ver o código funcionando na web

```bash
  npm run dev
``` -->