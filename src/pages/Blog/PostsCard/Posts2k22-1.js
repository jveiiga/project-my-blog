import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer'




const PagesBlogPostsCardFuncoesParametros = () => {
    return (
      <main className="container-post">
        <Link to="/FuncoesParametros">
          <section className="container-card">
            <h2>Funções e parâmetros</h2>
            <p>15 Agosto 2022</p>
          </section>
        </Link>
        <Footer />
      </main>
    );
}

export default PagesBlogPostsCardFuncoesParametros;