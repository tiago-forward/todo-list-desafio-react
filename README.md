# Desafio React (Rocketseat) - ToDo List

## Tabela do Conteudo

<ul>
<li><a href="#introdução">Introdução</a></li>
<li><a href="#objetivo">Objetivo</a></li>
<li><a href="#desafio">Desafio</a></li>
<li><a href="#status">Status</a></li>
<li><a href="#curiosidade">Curiosidade</a></li>
<li><a href="#layout-do-projeto">Layoult do projeto</a></li>
<li><a href="#tecnologias-e-bibliotecas-utilizadas">Tecnologias e bibliotecas</a></li>
<li><a href="#instalando-e-executando-o-projeto">Instalação</a></li>
</ul>

## Introdução

Esse desafio faz parte do curso da [Rocketseat](https://www.rocketseat.com.br/), ele serve para nos desafiarmos e nos preparar para o mercado de trabalho. Irei resolver esse desafio e compartilhar minhas experiências.

## Objetivo

Desenvolver uma aplicação de controle de tarefas no estilo to-do list, que contém as seguintes funcionalidades:

    - Adicionar uma nova tarefa; ✅
    - Marcar e desmarcar uma tarefa como concluída; ✅
    - Remover uma tarefa da listagem; ✅
    - Mostrar o progresso de conclusão das tarefas. ✅

## Desafio

Durante o desenvolvimento desse projeto, meu maior desafio foi em acessar os dados e manipular o objeto, na qual foi criado um hook personalizado. Pude também praticar os métodos do JavaScript, e resolvendo o desafio mais rapidamente.

Outro ponto importante e desafiador, estava em lidar com os erros de tipagem em meu código em alguns métodos do JavaScript e no estado do meu useTaskData, depois de muita pesquisa pude perceber que estava faltando eu atribuir uma melhor tipagem no meu hook de useTaskData. Foi declarado a minha função o valor do retorno do primeiro elemento `TaskProps` e o segundo elemento da minha função de atualizar o estado, com o `Dispatch` que serve para despachar ações, o tipo genérico do react, `SetStateAction` que pode ser um novo valor direito do estado ou uma função que recebe o valor atual do estado e retorna o novo valor do estado, e por fim, especificar que o estado em questão é uma array de `TraskProps`.

<img src="./src/assets/ts-0.png" alt="">

## Status

Desafio concluído. 🥰

## Layout do projeto

<img src="./src/assets/gif-layout-desktop.gif" alt="Gif do layout descktop">
<img src="./src/assets/gif-layout-mobile.gif" alt="Gif do layout mobile">

## Curiosidade

Serão abordados os conceitos abaixo para a resolução desse desafio:

- Estados
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

## Tecnologias e bibliotecas utilizadas

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Uuid
- Phosphor Icons
- Git


## Instalando e executando o projeto

1º - Clone o repositório do projeto em HTTPS ou SSH com sua SSH key;

HTTPS
```bash
  git clone https://github.com/tiago-forward/todo-list-desafio-react.git
```

SSH
```bash
  git clone git@github.com:tiago-forward/todo-list-desafio-react.git
```

Em sua máquina, crie uma nova pasta e execute o git, e em seguida cole um dos links acima.
<br>

2º - Entre no diretório do projeto na qual foi clonado;

```bash
  cd todo-list-desafio-react
```

3º - Execute o comando abaixo para instalar todas as dependências utilizadas;

```bash
  npm install
```

4º - Inicialize a aplicação para ver o código funcionando na web.

```bash
  npm run dev
``` -->
