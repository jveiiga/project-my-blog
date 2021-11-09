import React from 'react';
import Footer from 'components/Footer/Footer'



const PagesAboutMe = () => {
    return (
      <main className="container-main__AboutMe">
        <p className="">
          Hey THERE, I’m Jeferson Veiga! ✨ <br />
          About me? <br />I always found it difficult to define me, some people
          like sports, others like games,but me, I like it all it. In resume, I
          think I'm an enthusiast of technology, a quiet person who loves
          venture, playing sports and learn new things. My name is Jeferson
          Veiga, I'm 32 years old, am Paulista and currently reside in the east
          side. Development Study Front end, about a little over a year and a
          half. I have been working on my own projects improving my skills and
          looking for mine first opportunity. I'm a Developer Front end with a
          feel for UI design.
          <br />I have language skills:
          <div className="container-img-stacks">
              <img src="/images/logo/html-logo.png" alt="loog html"/>
              <img src="/images/logo/css-logo.png" alt="logo css"/>
              <img src="/images/logo/js-logo.png" alt="logo javascript"/>
          </div>
       
          And I have experience with Sass and Bootstrap. I am currently
          dedicated to learning React, Next and TypeScript, working on projects
          with API consumption, componentization and pagination. I like to learn
          new things and I love develop, I'm always looking for new challenges
          and solid foundations, despite the little experience.
          <br /> My contact email, GitHub and LinkedIn are just below. I am open
          to questions whenever to need. Hugs! 🤝👋
        </p>
        <Footer />
      </main>
    );
}

export default PagesAboutMe;