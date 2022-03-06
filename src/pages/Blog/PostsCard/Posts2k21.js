import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer'




const PagesBlogPostsCardAsyncAwait = () => {
    return (
      <>
        <main className="container-post__title">
          <span className="container-title__card">2021</span>
          <Link to="/Async-Await">
            <section className="container-card">
              <h2>Promises and Async/Await</h2>
              <p>17 Novembro 2021</p>
            </section>
          </Link>
        </main>
      </>
    );
}

export default PagesBlogPostsCardAsyncAwait;