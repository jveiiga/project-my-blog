import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer'




const PagesBlogPostsCardFormSubmit = () => {
    return (
      <>
        <main className="container-post">
          <span className="container-title__card">2022</span>
          <Link to="/FormSubmit">
            <section className="container-card">
              <h2>Enviando formulário sem programar Back-End com Formsubmit</h2>
              <p>06 Março 2022</p>
            </section>
          </Link>
          <Footer/>
        </main>
      </>
    );
}

export default PagesBlogPostsCardFormSubmit;