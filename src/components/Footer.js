import React from 'react';
import orcid from './orcid.svg';
import researchgate from './researchgate.svg';

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/jona.schlegel/"
            className="icon fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/JonaSchlegel"
            className="icon fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/jonaschlegel" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jona-schlegel-942879153/"
            className="icon fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <div className="label">
            <a href="https://orcid.org/0000-0002-4190-9566">
              <img src={orcid} alt="ORCID" />
            </a>
          </div>
        </li>
        <li>
          <a href="https://www.researchgate.net/profile/Jona_Schlegel">
            <img src={researchgate} />
          </a>
        </li>
        {/* <li>
          <a
            href="https://lgb.academia.edu/JonaSchlegel"
            className="icon fa-academia"
          >
            <span className="label">Academia.edu</span>
          </a>
        </li> */}
      </ul>
    </div>
  </div>
);

export default Footer;
