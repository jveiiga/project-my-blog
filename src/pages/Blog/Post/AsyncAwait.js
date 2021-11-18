import React from 'react';


const PagesBlogPostOne = () => {
    return (
      <main className="container-post__one">
        <h3 className="container-title">Promises and Async, Await</h3>
        <p className="container-text-async__await">
          <p>
            Faaala Dev, tudo bem? Espero que sim. Para iniciar as postagens do
            blog resolvi escolher um tema que vem se fazendo cada dia mais
            presente na minha jornada. Sem mais delongas, vamos lá !!
          </p>{" "}
          <p>
            Depois de algum tempo programando em JavaScript, confesso que me
            acostumei a utiliza-lo de forma síncrona, vendo blocos de códigos
            sendo executados linha após linha e a pensar de forma síncrona de
            programá-los, mas e se houvesse outras possibilidades que fizessem
            esse trabalho ficar mais assíncrono, tornando as{" "}
            <code>Promises</code> e a componentização mais reutilizável e
            facilitando também a manutenção do código? Foi com essa missão que
            esses recursos foram implementados pelo ECMAScript 2017. Não vou
            focar em como as coisas eram e como agora são, até por que já tem
            bastante conteúdo disponível, com muito mais qualidade e muito bem
            feito! Diferente disso quero apenas trazer uma abordagem que talvez
            ajude alguém em algum lugar que esteja buscando uma estratégia para
            começar a utiliza-lá.
          </p>{" "}
          <p>
            Na minha cabeça <code>Promises</code> faz mais sentido quando
            começamos a consumir APis, ter nossas requisições feitas por um
            componente específico e declara-lo em funções assíncronas quando
            precisamos fazer a chamada dos dados, é algo que torna o código de
            fácil compreensão e leitura, alem de torna-lo um código que tende a
            crescer para baixo sem formar aquela “barriga”, deixando seu
            aninhamento menos complexo. Vale lembrar que o JavaScript continuará
            executando os blocos de código de forma síncrona, mas esses requests
            que são passados para uma thread separada, fazem com que o código
            continue executando normalmente sem travar seu fluxo, fazendo o
            request dos dados e adicionando a função de callback ao fim da fila
            de funções.
          </p>
          <p>
            Neste exemplo logo abaixo que foi construído utilizando a APi
            Pokemon, é criado um componente chamado <code>services</code>, esse
            componente tem como objetivo fazer algumas de nossas requisições. A
            primeira função
            <code>getAllPokemon</code> tem como objetivo retornar um JSON de
            todos os Pokemons listados na APi, a função recebe como parâmetro a{" "}
            <code>URL</code> e retorna uma nova promessa (
            <code>new Promise</code>) que recebe outros parâmetros padrão,{" "}
            <code>resolve</code> e <code>reject</code>, logo após é feito um{" "}
            <code>fetch</code> para a <code>URL</code> e um <code>THEN</code>{" "}
            que faz a busca e verificação do JSON e logo abaixo outro{" "}
            <code>THEN</code> que será executado assim que o JSON dos Pokemons
            retornar.
          </p>{" "}
          A segunda função, tem os mesmos objetivo, mas ao invés de ser
          utilizada para listar todos os Pokemons, ela vai ser utilizada para
          exibir individualmente esses Pokemons. Achei melhor iniciar com esse
          componente para dar contexto as funções que vão receber esse parâmetro
          no nosso App.
        </p>
        <img
          src="/images/blog/async-await/imageOne.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          <div className="container-text-list">
            <p>
              Em nosso App, iniciamos nossa função declarando as variáveis que
              serão utilizadas. Utilizando o <code>useState</code>, iremos
              implementar as seguintes funcionalidades:
            </p>
          </div>
          <ul>
            <li>
              ⚫️ <code>pokemonData</code> - Inicialmente recebe um Array vazio
              e retorna a listagem de todos os Pokemons da APi.
            </li>
            <li>
              ⚫️ <code>nextUrl</code> - Inicialmente recebe uma String vazia e
              quando o estado é alterado, recebe os parâmetros dos próximos
              Pokemons vindo da APi.
            </li>
            <li>
              ⚫️ <code>prevURL</code> - Tem praticamente as mesmas funções da
              nextUrl, exceto uma condicional que verifica se há ou não uma
              página anterior.
            </li>
            <li>
              ⚫️ <code>loading</code> - Inicialmente recebe um valor booleano
              (true), verifica e executa o carregamento dos dados da primeira
              página da APi.
            </li>
            <li>
              ⚫️ <code>initialUrl</code> - Armazena os dados que retornam da
              APi para serem manipulados da melhor forma durante o
              desenvolvimento do programa.
            </li>
          </ul>
        </p>
        <img
          src="/images/blog/async-await/imageTwo.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Utilizando o <code>useEffect</code>, vamos cuidar da renderização dos
          dados da APi através dos components de <code>state</code>.
          Declamáramos inicialmente uma função assíncrona chamada{" "}
          <code>fetchData</code> (buscaDeDados). Logo após declaramos uma nova
          variável chamada <code>response</code>, é preciso que seja passado o{" "}
          <code>await</code>
          (aguardando), uma vez que estamos utilizando uma função declarada como
          assíncrona, ela também recebe os valores de <code>
            getAllPokemon
          </code>{" "}
          que estão vindo de component <code>services/pokemon.js</code>, essa
          variável recebe como parâmetro nossa <code>initialUrl</code>.{" "}
          <code>setNextUrl</code> defini o estado da próxima página que será
          carregada e guarda os valores no <code>state</code> do react recebendo
          como parâmetro os dados de <code>response.next</code> vindos da APi.{" "}
          <code>setPrevUrl</code>
          defini o estado da página anterior que será carregada caso haja uma, e
          guarda os valores no <code>state</code> do react recebendo como
          parâmetro os dados de <code>response.previous</code> vindos da APi. E
          novamente usaremos o <code>await</code>
          (aguardando), desta vez para carregar e guardar o <code>
            state
          </code>{" "}
          da nossa lista de Pokemons. <code>setLoading</code> é declarada como{" "}
          <code>false</code> uma vez que já ocorreu o carregamento da nossa
          lista de Pokemons quando o programa executou o <code>useState</code>{" "}
          da nossa variável. E por ultimo e não menos importante, passamos a
          função <code>fetchData</code> que irá buscar os dados. Você pode fazer
          um <code>console.log(response)</code> abaixo da variável{" "}
          <code>let response</code> e ver os valores retornando no browser.
        </p>
        <img
          src="/images/blog/async-await/imageThree.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Agora que temos o retorno do nosso array de Pokemons, precisamos
          trabalhar no <code>state</code> que já definimos (
          <code>setPokemonData</code>) e que lidará com o armazenamento e
          carregamento dos dados que retornaram da APi. Iniciamos criando uma
          função assíncrona <code>loadPokemon</code> (carregar Pokemon) que
          recebe como propriedade os dados (<code>data</code>) e retorna um
          callback de duas variáveis. A primeira <code>_pokemonData</code>{" "}
          recebe o <code>await</code> e aguarda a<code>Promise.all</code> (todas
          a promessas), fazendo um <code>data.map</code> do nosso array e
          definindo de forma assíncrona que a propriedade <code>pokemon</code>{" "}
          retorne o objeto para a segunda variável criada,{" "}
          <code>pokemonRecord</code> (gravando Pokemon), que tem como seu valor{" "}
          <code>getPokemon</code> (obtendo Pokemon) e recebendo como sua
          propriedade <code>pokemon</code> (<code>services/pokemon.js</code>),
          por fim fazemos o retorno da função <code>pokemonRecord</code> e
          “setamos” um <code>state</code> para
          <code>setPokemonData</code> que recebe como parâmetro os dados obtidos
          da variável
          <code>_pokemonData</code> e renderizará nosso <code>state</code>.
        </p>
        <img
          src="/images/blog/async-await/imageFour.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Vamos então, verificarmos o retorno e tratar da sua renderização em
          tela, logo após podemos ver a implementação dos botões. Usando o{" "}
          <code>state</code>
          <code>pokemonData</code> criado para armazenar o array de pokemons,
          fazemos um <code>map</code>
          para a criação do array que será renderizado e recebemos{" "}
          <code>pokemon</code> como parâmetro do retorno do objeto que nada mais
          é, do que nosso component <code>Card</code> que recebe como
          propriedade nosso outro component <code>pokemon</code>.
        </p>
        <img
          src="/images/blog/async-await/imageFive.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Após ser feita a renderização dos dados, podemos lidar com a
          implementação das funções dos botões: anterior e próximo. Iniciamos
          nossa função <code>next</code> que também deve ser uma função
          assíncrona e que retorna <code>setLoading</code>, onde usamos seu
          valor inicial (<code>true</code>) para fazer o carregamento dos dados,
          e logo após definimos a variável <code>data</code> que recebe{" "}
          <code>await</code> (aguardando) e aguarda os dados vindos da nossa
          função
          <code>getAllPokemon</code> que estão vindo de{" "}
          <code>services/pokemon</code> e recebe como parâmetro{" "}
          <code>nextUrl</code> vindo da APi. Novamente usamos o{" "}
          <code>await</code> (aguardando) para aguardar os dados que retornan da
          nossa função <code>loadPokemon</code> e que tem como objetivo definir
          um novo array sem alterar o anterior, armazenar e gravar os resultados
          vindo da APi. <code>setNextUrl</code> armazena os dados do nosso
          próximo <code>state</code> pegando os dados vindo da APi através de
          <code>data.next</code>.
        </p>
        <img
          src="/images/blog/async-await/imageSix.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          <code>setPrevUrl</code> também tem as mesmas funcionalidades, exceto
          que seu armazenamento é feito somente caso haja uma página anterior,
          como podemos verificar de acordo com a condicional <code>if</code> no
          exemplo a baixo. Por ultimo “setamos” <code>setLoading</code> como{" "}
          <code>false</code> para que não haja mais carregamentos, uma vez que
          já obtivemos os dados.
        </p>
        <img
          src="/images/blog/async-await/imageSeven.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          <code>loadPokemon</code> tem como parâmetro os dados que retornam da
          APi (<code>data</code>).
          <code>let _pokemonData</code>, recebe e aguarda (<code>await</code>)
          que todas (<code>all</code>) as <code>Promises</code>
          tenham sido resolvidas e após serem resolvidas queremos que todas
          essas <code>Promises</code> nos retornem a matriz dos dados (objetos)
          coletados. Faremos um mapeamento da matriz através do{" "}
          <code>data.map</code>. Logo após passamos uma função assíncrona para{" "}
          <code>pokemon</code> e definimos uma nova variável dentro do escopo,
          chamada <code>pokemonRecord</code> (gravando pokemons), essa variável
          tem como objetivo guardar os dados individuais de cada objeto (
          <code>pokemon</code>) vindos do array e aguardar os dados vindos do
          component <code>pokemon</code>, mas principalmente da função{" "}
          <code>getPokemon</code> (obter pokemon). Após fazermos o mapeamento e
          obtermos todos os dados, retornamos os dados armazenados e em seguida
          passamos a armazena-los novamente em nosso <code>state</code> do react
          (<code>useEffect</code>) com <code>setPokemonData</code>, passamos
          como parâmetro nossa função <code>_pokemonData</code> e assim temos o
          <code>fetch</code> dos dados disponíveis para exibição.
        </p>
        <img
          src="/images/blog/async-await/imageEight.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Com as implementações feitas, iremos cuidar agora do processo de
          renderização de nossos components. Iremos passar dentro da{" "}
          <code>div “card__name”</code> nossos objetos. Iniciamos fazendo um
          mapeando de
          <code>pokemonData</code> que receberá nosso component (objeto){" "}
          <code>pokemon</code>, junto com o valor da nossa chave{" "}
          <code>kei</code>. Logo após retornamos nossos dados (objetos), dentro
          do nosso component <code>Card</code> e passamos duas propriedades:{" "}
          <code>kei</code> com o valor <code>i</code> e <code>pokemon</code> com
          o objeto <code>pokemon</code>. Pronto! Agora já é possível ver no
          browser os dados vindos da nossa APi pokeAPI. Para finalizar vamos
          adicionar alguns eventos aos botões que estão implementados logo a
          baixo. Usando o manipulador de eventos do react, <code>onClick</code>,
          passamos os parâmetros da nossa <code>URL</code> (APi),{" "}
          <code>prev</code> e <code>next</code>.
        </p>
        <img
          src="/images/blog/async-await/imageNine.png"
          alt="imagem demonstrativa do exemplo"
          className="container-image-async__await"
        />
        <p className="container-text-async__await">
          Com isso finalizamos nossa aplicação. Espero que ter ajudado e nos
          vemos no próximo post. Até breve🖖🏾
        </p>
      </main>
    );
}

export default PagesBlogPostOne;