import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/Footer'




const PagesBlogPostsCard = () => {
    return (
      <main className="container-post__title">
        <span className="container-title__card">2021</span>
        <Link to="/Async-Await">
          <section className="container-card__async-await">
            <h2>Promises and Async/Await</h2>
            <p>17 Novembro 2021</p>
          </section>
        </Link>
        <Footer/>
      </main>
    );
}

export default PagesBlogPostsCard;