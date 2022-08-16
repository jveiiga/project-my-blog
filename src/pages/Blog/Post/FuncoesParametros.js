import React from 'react';

const PagesBlogFuncoesParametros = () => {

    return (
        <main className="container-post__one">
            <h3 className="container-text-general">Funções e parâmetros</h3>

            <p>Para iniciar, vamos partir do princípio que os Devs que vão ler esse post já sabem o que uma função faz, então vou encurtar.</p>

            <p className="container-text-general">
                Quando estamos iniciando, aprendemos quase que instantemente a forma como declaramos uma função,
                mas levamos tempo para entender sobre seus parâmetros e como trabalhar com eles. O objetivo deste post,
                não é só explicar de forma prática, mas te fazer um convite em como pensar, sobre esses tais parâmetros.
            </p>

            <p className="container-text-general">
                Usamos parâmetros a todo momento no JavaScript, mas no inicio quando estamos vendo aquilo, por pouco
                tempo, não entendemos de forma tão clara como eles funcionam. Então uma dica valiosa, seria: nem sempre as coisas
                se parecem, quando um parâmetro é passado, por mais que ele venha nomeado de outro lugar, na função
                que ele é recebido, ele pode ser renomeado. Quando recebemos um parâmetro, ele pode ser chamado de argumento,
                esse argumento é recebido como parâmetro e a partir desse momento podemos manipular o valor desse elemento.
                Quando recebemos o parâmetro, por algum motivo podemos querer dar um nome mais descritivo para aquele contexto
                e por isso podemos renome-la e, é nesse exato momento que as pessoas se perdem e as coisa começam a perder
                o sentido. Funções são assim, tem toda uma complexidade envolvida que ao longo do tempo você vai pegando.
            </p>
            <img
                src="/images/blog/funcoes-parametros/funcaoMaxValue.png"
                alt="imagem demonstrativa do exemplo"
                className="container-image"
            />
            <img
                src="/images/blog/funcoes-parametros/returnMaxValue.png"
                alt="imagem demonstrativa do exemplo"
                className="container-image"
            />
            <p className="container-text-general">
                No nosso exemplo recebemos um argumento como parâmetro, como podemos ver na <code>(linha 17)</code>, esse parâmetro que recebemos é um <code>array</code> de números inteiros <code>(linha 1)</code>, queremos saber qual é o maior valor contido nele.
                Perceba que quando recebemos o argumento ele vem nomeado de <code><code>array</code> (linha 17)</code> mas quando o passamos como parâmetro ele recebe o nome de <code>arr (linha 3)</code>, pois é, chegamos no ponto, usei uma nova variável para guardar o valor do parâmetro <code>(linha 5)</code> e para exemplificar
                melhor como os valores podem se modificar. Em alguns momentos o nome das variáveis que armazenam os valores podem
                estar sendo modificados, seja para fazer mais sentido ou para ser passado como parâmetro, não sei, mas pode acontecer.
            </p>

            <p className="container-text-general">
                Dentro da função não nada há demais, temos uma função que percorre um <code>array</code> e verifica o valor de todas as suas posições, esse <code>array</code> foi passado como argumento <code>array</code> <code>(linha 17)</code>, recebeu o nome de arr no parâmetro <code>(linha 3)</code> e logo após foi chamado como valor dentro de
                uma variável nomeada de <code><strong>findMaxValue</strong> (linha 5)</code>, se<code>(if) <strong>maxValue</strong></code> for  maior <code>{'>'}</code> do que o valor de <code><strong>findMaxValue[i]</strong></code> <code>(linha 10)</code>, <code><strong>maxValue</strong></code> recebe
                o valor de <code><strong>findMaxValue[i]</strong></code> <code>(linha 12)</code> e por fim retornamos <code><strong>maxValue</strong></code> <code>(linha 15)</code> que foi a variável que recebeu o valor do maior número do <code>array</code>.
            </p>

            <p className="container-text-general">Como estamos com um <code>console.log()</code> na função exemplo <code>(linha 17)</code>, temos o valor que foi retornado.</p>

            <p className="container-text-general">
                Nesse exemplo tento mostra que valores podem ser nomeado por algum motivo e como parâmetros são recebidos
                como argumento em uma função. Espero ter ajudado e nos vemos no próximo post. Até breve🖖🏾
            </p>

        </main>
    )
}

export default PagesBlogFuncoesParametros