import React from 'react';
import { Link } from 'react-router-dom';




const PagesBlogPostsCard = () => {
    return (
        <div className="container-post__title">
        <Link to="/Post-one">
           <h1>Return API with Promises Assync, Await</h1>
        </Link>
        </div>
    );
}

export default PagesBlogPostsCard;