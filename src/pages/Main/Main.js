import React from 'react';
import Footer from '../../components/Footer/Footer'


const PagesMain = () => {
    return (
        <main className="container-main">
        <img
          src="/images/my-image/my_image_tablet.png"
          alt="it's me"
          className="container-my-image__mobile"
        />
        <img
          src="/images/my-image/my_image_tablet.png"
          alt="it's me"
          className="container-my-image__tablet"
        />
        <p className="container-text">
          Hello World! <br />
          I'm Jeferson Veiga, front-end developer. <br />I love sports, games and
          coffe. <br /> Some of my works are available here, feel free!
        </p>
        <Footer/>
      </main>
    )
}

export default PagesMain;