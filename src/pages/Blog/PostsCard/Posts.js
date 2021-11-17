import React from 'react';
import { Link } from 'react-router-dom';




const PagesBlogPostsCard = () => {
    return (
      <div className="container-post__title">
        <span className="container-title__card">2021</span>
        <Link to="/Async-Await">
          <section className="container-card__async-await">
            <h2>Promises and Async/Await</h2>
            <p>17 Novembro 2021</p>
          </section>
        </Link>
      </div>
    );
}

export default PagesBlogPostsCard;