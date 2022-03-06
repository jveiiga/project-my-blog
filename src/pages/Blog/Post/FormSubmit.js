import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';

const PagesBlogFormSubmit = () => {
    // const [copied, setCopied] = useState(false)
    const form = '<form action="https://formsubmit.co/seu@email.com"method="POST"/>'
    const hidden = '<input type="hidden" name="_next" value="http://seudominio/seuarquivo.html"/>'

    return (
        <main className="container-post__one">
          <h3 className="container-title">
            Enviando formulário sem programar Back-End com Formsubmit{" "}
          </h3>
          <p className="container-text-general">
            <p>
              Faaala Dev, tudo bem? Espero que sim. Passando pra deixar aquela
              dica!! Até pouco tempo não conhecia o <code>formsubmit</code>, uma
              forma bacana de ter uma aplicação simples, desenvolvida com{" "}
              <code>HTML</code> e <code>CSS</code> e deploy na Vercel ou até
              mesmo no GitHub pages, com um formulário funcionando e atendendo
              suas necessidades de contato. Sem mais delongas, vamos lá!!
            </p>{" "}
            <p>
              A implementação é simples e bem prática. É como está na
              documentação do <code>formsubmit</code>, conecte seu formulário!!
              A baixo temos uma estrutra feita em <code>HTML</code> bem simples
              com uma <code>tag form</code>, é por ela que vamos iniciar. Na
              documentação oficial também é explicado de forma bem simples de
              entender. Basta copiar o código abaixo e seguir o exemplo da
              imagem. Você deve apontar o atributo <code>action</code> para o
              endereço do <code>formsubmit</code> juntamente com o endereço de
              e-mail que você deseja receber os dados do formulário, após também
              colocamos o atributo <code>method</code> que define qual o método{" "}
              <code>HTTP</code> para enviar os dados, no caso queremos o método{" "}
              <code>POST</code>.
            </p>
            <br />
            <CopyToClipboard text={form}>
              <p
                className="container-copytoclipboard"
                onClick={() => toast("Copiado!")}
              >
                {form}
              </p>
            </CopyToClipboard>
            <Toaster />{" "}
          </p>
          <img
            src="/images/blog/form-submit/fs-img-one.png"
            alt="imagem demonstrativa do exemplo"
            className="container-image"
          />
          <p className="container-text-general">
            <div className="container-text-list">
              <p>
                Logo após iremos incluir na <code>tag input</code> o atributo{" "}
                <code>type</code> com o valor <code>hidden</code> (escondido),
                para que este <code>input</code> fique invisível (essa
                configuração é feita pelo <code>formsubmit</code>), também temos
                mais duas <code>tags</code> para declarar no código,{" "}
                <code>name</code> e <code>value</code>, o atributo{" "}
                <code>name</code> recebi o valor <code>_next</code> (próximo)
                que irá junto com a <code>tag value</code> se encarregar de nos
                redirecionar para o endereço onde configuramos nossa página de
                confirmação. Perceba que após o endereço <code>HTTP</code> foi
                adicionado um novo documento <code>HTML</code>.
              </p>
              <br />
              <CopyToClipboard text={hidden}>
                <p
                  className="container-copytoclipboard"
                  onClick={() => toast("Copiado!")}
                >
                  {hidden}
                </p>
              </CopyToClipboard>
              <Toaster />{" "}
            </div>
          </p>
          <img
            src="/images/blog/form-submit/fs-img-two.png"
            alt="imagem demonstrativa do exemplo"
            className="container-image"
          />
          <p className="container-text-general">
            É exatamente para lá que iremos ir após marcar que não somos um robô
            no CAPTCHA.
          </p>
          <img
            src="/images/blog/form-submit/fs-img-three.png"
            alt="imagem demonstrativa do exemplo"
            className="container-image"
          />
          <p className="container-text-general">
            Configurei uma mensagem bem simples, o intuito é dar um Feedback e
            deixar opções como um <code>link</code> “Voltar” que implementei
            para o usuário ser redirecionado para a página <code>home</code> e
            permanecer na aplicação caso seja o intuito dele.
          </p>
          <img
            src="/images/blog/form-submit/fs-img-four.png"
            alt="imagem demonstrativa do exemplo"
            className="container-image"
          />
          <p className="container-text-general">
            Por último, devemos nos atentar que nosso formulário deve conter um{" "}
            <code>input</code> com o atributo <code>type</code> e com seu valor{" "}
            <code>email</code>, para que após o formulário ser preenchido pelo
            usuário e encaminhado para seu e-mail possamos responder o e-mail
            diretamente para o e-mail informado pelo usuário.
          </p>
          <img
            src="/images/blog/form-submit/fs-img-five.png"
            alt="imagem demonstrativa do exemplo"
            className="container-image"
          />
          <p className="container-text-general">
            Com isso finalizamos nossa aplicação. Espero ter ajudado e nos vemos
            no próximo post. Até breve🖖🏾
          </p>

        </main>
    );
}

export default PagesBlogFormSubmit