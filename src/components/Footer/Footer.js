import React from 'react';

const Footer = () => {
    return (
      <footer className="container-footer">
        <div className="container-icon-text">
          <div>
            <img src="/images/icon/icon_heart.png" alt="icon heart" />
          </div>
          <div className="container-text__footer">
            <p>por Jeferson Veiga</p>
          </div>
        </div>
        <div>
          <div className="container-icons">
            <img src="/images/icon/GithubLogo_mobile.png" alt="github" />
            <img src="/images/icon/LinkedinLogo_mobile.png" alt="linkedin" />
            <img
              src="/images/icon/EnvelopeSimple_mobile.png"
              alt="envelope"
              className="icon-envelope"
            />
          </div>
        </div>
      </footer>
    );
}

export default Footer;