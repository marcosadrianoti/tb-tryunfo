# Projeto Tryunfo! :flower_playing_cards:
Projeto desenvolvido por mim durante o curso de Desenvolvimento Web na Trybe. Divulgado aqui como portfólio de aprendizado.

<details>
<summary><strong>Objetivos do projeto:</strong></summary>

  * Desenvolver um jogo no estilo Super Trunfo! Uma pessoa usuária deverá ser capaz de:
    * Criar um baralho com o tema livre.
    * Adicionar e remover uma carta do baralho.
    * Visualizar todas as cartas que foram adicionadas ao baralho.
    * Jogar com o baralho criado.
  * Verificar se eu era capaz de desenvolver usando:
    * Ler o estado de um componente e usá-lo para alterar o que exibimos no browser.
    * Inicializar um componente, dando a ele um estado pré-definido.
    * Atualizar o estado de um componente.
    * Capturar eventos utilizando a sintaxe do React.
    * Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`.
    * Transmitir informações de componentes filhos para componentes pais via callbacks.
</details>
<details>
<summary><strong> Requisitos do projeto:</strong></summary>

  * (TDD) Desenvolver testes de no mínimo 50% de cobertura das funções e linhas do arquivo fetchFunctions.
  * Implementar a função fetchProductsList.
  * Criar uma listagem de produtos.
  * Adicionar um texto de carregando durante uma requisição à API.
  * Exibir uma mensagem de erro caso algo dê errado na requisição à API.
  * (TDD) Desenvolver testes de no mínimo 100% de cobertura das funções e linhas do arquivo fetchFunctions.
  * Implementar a função fetchProduct.
  * Adicionar o produto ao carrinho de compras.
  * Carreguar o carrinho de compras ao iniciar a página.
  * Calcular o valor total dos itens do carrinho de compras.
  * Fazer uma requisição a API de CEPs e exibir o endereço do CEP.
</details>
  
## Rodando o projeto localmente

Para rodar o projeto em sua máquina, abra seu terminal, crie um diretório no local de sua preferência com o comando `mkdir` e acesse o diretório criado com o comando `cd`:

```bash
mkdir meu-diretorio &&
cd meu-diretorio
```

Clone o projeto com o comando `git clone`:

```bash
git clone git@github.com:marcosadrianoti/tb-shopping-cart.git
```

Acesse o diretório do projeto com o comando `cd`:

```bash
cd tb-shopping-cart
```

Instale as dependências executando:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Com a aplicação rodando. Utilize os seguintes comandos para executar os testes:
 * `npm test` (Executa todos os testes presentes na aplicação)
 * `npm run test:coverage` (Executa testes de cobertura)
 * `npm run cy:open` (Executa os testes do Cypress)
    
