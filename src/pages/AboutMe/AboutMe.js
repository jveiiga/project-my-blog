import React from 'react';
import Footer from 'components/Footer/Footer'



const PagesAboutMe = () => {
  return (
    <main className="container-main__AboutMe">
      <div className="">
        <p className="container-text__header">
          Hey THERE, I’m Jeferson Veiga! ✨
        </p>

        <p className="container-text-part__one">About me?</p>

        <p className="container-text-part__two">
          I always found it difficult to define me, some people like sports,
          others like games,but me, I like it all it. In resume, I think I'm
          an enthusiast of technology, a quiet person who loves venture,
          playing sports and learn new things. My name is Jeferson Veiga, I'm
          33 years old, am Paulista and currently reside in the east side.
          Since March I have been studying Full-Stack development at Kenzie 
          Academy where I have gained a lot of knowledge of Hard-Skills and 
          Soft-Skills. I'm a Developer Front end with a feel for UI design.
        </p>

        <p className="container-text-title__img">I have language skills:</p>
        <div className="container-img-stacks">
          <img src="/images/logo/html-logo.png" alt="loog html" />
          <img src="/images/logo/css-logo.png" alt="logo css" />
          <img src="/images/logo/js-logo.png" alt="logo javascript" />
        </div>
        <p className="container-text-part__three">
          And I have experience with Sass and Bootstrap. I am currently
          dedicated to learning React, Next and TypeScript, working on
          projects with API consumption, componentization and pagination. I
          like to learn new things and I love develop, I'm always looking for
          new challenges and solid foundations, despite the little experience.
        </p>

        <p className="container-text-footer">
          My contact email, GitHub and LinkedIn are just below. I am open to
          questions whenever to need.
        </p>
        <p>Hugs! 🤝👋</p>
      </div>
      <Footer />
    </main>
  );
}

export default PagesAboutMe;