import React from 'react';


const PagesBlogPostOne = () => {
    return (
      <main className="container-post__one">
        <h3 className="container-title">
          Return API with Promises Assync, Await
        </h3>
        <p className="container-text-part__one">
          Faaala Dev, tudo bem? Espero que sim. Para iniciar as postagens do
          blog resolvi escolher um tema que vem se fazendo cada dia mais
          presente na minha jornada. Sem mais delongas, vamos lá !! Depois de
          algum tempo programando em JavaScript, confesso que me acostumei a
          utiliza-lo de forma síncrona, vendo blocos de códigos sendo executados
          linha após linha e a pensar de forma síncrona de programá-los, mas e
          se houvesse outras possibilidades que fizessem esse trabalho ficar
          mais assíncrono, tornando as promisses e a componentização mais
          reutilizável e facilitando também a manutenção do código? Foi com essa
          missão que esses recursos foram implementados pelo ECMAScript 2017.
          Não vou focar em como as coisas eram e como agora são, até por que já
          tem bastante conteúdo disponível, com muito mais qualidade e muito bem
          feito! Diferente disso quero apenas trazer uma abordagem que talvez
          ajude alguém em algum lugar que esteja buscando uma estratégia para
          começar a utiliza-lá. Na minha cabeça Promisses faz mais sentido
          quando começamos a consumir APis, ter nossas requisições feitas por um
          componente específico e declara-lo em funções assíncronas quando
          precisamos fazer a chamada dos dados, é algo que torna o código de
          fácil compreensão e leitura, alem de torna-lo um código que tende a
          crescer para baixo sem formar aquela “barriga” - deixando seu
          aninhamento menos complexo. Vale lembrar que o JavaScript continuará
          executando os blocos de código de forma síncrona, mas esses requests
          que são passados para uma threads separada, fazem com que o código
          conti- nue executando normalmente sem travar seu fluxo, fazendo o
          request dos dados e adicionando a função de callback ao fim da fila de
          funções. Neste exemplo logo abaixo que foi construído utilizando a APi
          Pokemon, é criado um componente chamado services, esse componente tem
          como objetivo fazer algumas de nossas requisições. A primeira função
          getAllPokemon tem como objetivo retornar um JSON de todos os Pokemons
          listados na APi, a função recebe como parâmetro a URL e retorna uma
          nova promessa (new Promise) que recebe outro parâmetro resolve e
          reject, logo após é feito um fetch para a mesma URL e um THEN que faz
          a busca e verificação do JSON e logo abaixo outro THEN que será
          executado assim que o JSON dos Pokemons retornar. A segunda função,
          tem os mesmos objetivo, mas ao invés de ser utilizada para listar
          todos os Pokemons, ela vai ser utilizada para exibir individualmente
          esses Pokemons. Achei melhor iniciar com esse componente para dar
          contexto as funções que vão receber esse parâmetro no nosso App.
        </p>
        <img
          src="/images/blog/post-one/imageOne.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-one"
        />
        <p className="container-text-part__two">
          <div className="container-text-list">
            Em nosso App, iniciamos nossa função declarando as variáveis que
            serão utilizadas. Utilizando o useState, iremos implementar as
            seguintes funcionalidades:
          </div>
          <li>
            ⚫️ pokemonData - Inicialmente recebe um Array vazio e retorna a
            listagem de todos os Pokemons da APi.
          </li>

          <li>
            ⚫️ nextUrl - Inicialmente recebe uma String vazia e quando o estado
            é alterado, recebe os parâmetros dos próximos Pokemons vindo da APi.
          </li>

          <li>
            ⚫️ prevURL - Tem praticamente as mesmas funções da nextUrl, exceto
            uma condicional que verifica se há ou não uma página anterior.
          </li>

          <li>
            ⚫️ loading - Inicialmente recebe um valor booleano (true), verifica
            e executa o carregamento dos dados da primeira página da APi.
          </li>

          <li>
            ⚫️ initialUrl - Armazena os dados que retornam da APi para serem
            manipulados da melhor forma durante o desenvolvimento do programa.
          </li>
        </p>
        <img
          src="/images/blog/post-one/imageTwo.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-two"
        />
        <p className="container-text-part__three">
          Utilizando o useEffect, vamos cuidar da renderização dos dados da APi
          através dos components de state. Declamáramos inicialmente uma função
          assíncrona chamada fetchData (buscaDeDados). Logo após declaramos uma
          nova variável chamada response, e é preciso que seja passado o await
          (aguardando), uma vez que estamos utilizando uma função declarada como
          assíncrona, ela também recebe os valores de getAllPokemon que estão
          vindo de component services/pokemon.js, essa variável recebe como
          parâmetro nossa initialUrl. setNextUrl defini o estado da próxima
          página que será carregada e guarda os valores no state do react
          recebendo como parâmetro os dados de response.next da APi. setPrevUrl
          defini o estado da página anterior que será carregada caso haja uma e
          guarda os valores no state do react recebendo como parâmetro os dados
          de response.previous da APi. E novamente usaremos o await
          (aguardando), desta vez para carregar e guardar os state da nossa
          lista de Pokemons. setLoading é declarada como false uma vez que já
          ocorreu o carregamento da nossa lista de Pokemons quando o programa
          executou o useState da nossa variável. E por ultimo e não menos
          importante, passamos a função fetchData que irá buscar os dados. Você
          pode fazer um console.log(response) abaixo da variável let response e
          ver os valores retornando no browser.
        </p>
        <img
          src="/images/blog/post-one/imageThree.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-three"
        />
        <p className="container-text-part__four">
          Agora que temos o retorno do nosso array de Pokemon, precisamos
          trabalhar no state que já definimos (setPokemonData) e que lidará com
          o armazenamento e carregamento dos dados que retornaram da APi.
          Iniciamos criando uma função assíncrona loadPokemon (carregar Pokemon)
          que recebe como propriedade os dados (data) e retorna um callback de
          duas variáveis. A primeira _pokemonData recebe o await e aguarda a
          Promise.all (todas a promessas), fazendo um data.map do nosso array e
          definindo de forma assíncrona que a propriedade pokemon retorne o
          objeto para a segunda variável criada pokemonRecord (gravando
          Pokemon), que tem como seu valor getPokemon (obtendo Pokemon) e
          recebendo como sua propriedade pokemon (services/pokemon.js), por fim
          fazemos o retorno da função pokemonRecord e “setamos” um state para
          setPokemonData que recebe como parâmetro os dados obtidos da variável
          _pokemonData e renderizará nosso state.
        </p>
        <img
          src="/images/blog/post-one/imageFour.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-four"
        />
        <p className="container-text-part__five">
          Vamos então, verificarmos o retorno e tratar da sua renderização em
          tela, logo após podemos ver a implementação dos botões. Usando o state
          pokemonData criado para armazenar o array de pokemons, fazemos um map
          para a criação do array que será renderizado e recebemos pokemon como
          parâmetro do retorno do objeto que nada mais é, do que nosso
          componente Card que recebe como props nosso outro component pokemon.
        </p>
        <img
          src="/images/blog/post-one/imageFive.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-five"
        />
        <p className="container-text-part__six">
          Após ser feita a renderização dos dados, podemos lidar com a
          implementação das funções dos botões: anterior e próximo. Iniciamos
          nossa função next que também deve ser uma função assíncrona e que
          retorna setLoading, onde usamos seu valor inicial (true) para fazer o
          carregamento dos dados e logo após definimos a variável data que
          recebe await (aguardando) e aguarda os dados vindos da nossa função
          getAllPokemon que estão vindo de services/pokemon e recebe como
          parâmetro nextUrl vindo da APi. Novamente usamos o await (aguardando)
          para aguardar que os dados que retornan da nossa função loadPokemon e
          que tem como objetivo definir um novo array sem alterar o anterior,
          armazenar e gravar os resultados vindo da APi. setNextUrl armazena os
          dados do nosso próximo state pegando os dados vindo da APi através de
          data.next.
        </p>
        <img
          src="/images/blog/post-one/imageSix.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-six"
        />
        <p className="container-text-part__seven">
          setPrevUrl também tem as mesmas funcionalidades, exceto que seu
          armazenamento é feito caso haja uma página anterior, como podemos
          verificar de acordo com a condicional if no exemplo a baixo. Por
          ultimo “setamos” setLoading como false para que não haja mais
          carregamentos, uma vez que já obtivemos os dados.
        </p>
        <img
          src="/images/blog/post-one/imageSeven.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-services-seven"
        />
      </main>
    );
}

export default PagesBlogPostOne;