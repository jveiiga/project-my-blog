import React from 'react';


const Footer = () => {
    return (
      <footer className="container-footer">
        <div className="container-icon-text">
          <div>
            <img
              src="https://img.icons8.com/plumpy/24/000000/code.png"
              alt="icon codigo font"
            />
          </div>
          <div className="container-text__footer">
            <p>por Jeferson Veiga</p>
          </div>
        </div>
        <div>
          <div className="container-icons">
            {/* github */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jveiiga"
            >
              <img
                src="https://img.icons8.com/ios-filled/30/000000/github.png"
                alt="icon github"
              />
            </a>
            {/* linkedin */}
            <a
              target="_blank"
              rel="noreferrer" 
              href="https://www.linkedin.com/in/jveiiga/">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
                alt="icon linkedin"
              />
            </a>
            {/* e-mail */}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:jeferson.veiiga@icloud.com"
            >
              <img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/35/000000/external-email-interface-kiranshastry-solid-kiranshastry.png"
                alt="icon email"
              />
            </a>
            {/* instagram */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jveiga.dev/"
            >
              <img
                src="https://img.icons8.com/glyph-neue/344/instagram-new.png"
                alt="icon instagram"
              />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;