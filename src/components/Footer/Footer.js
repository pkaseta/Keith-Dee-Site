import React from 'react';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

function FooterSticky() {
  return (
    <>
      <div className="footerSticky">
        <div className="footerdiv">
          <div>
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin
                className="social-icons"
                size={25}
                style={{ fill: 'white' }}
              />
            </a>
          </div>

          <div>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook
                className="social-icons"
                size={25}
                style={{ fill: 'white' }}
              />
            </a>
          </div>

          <div>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter
                className="social-icons"
                size={25}
                style={{ fill: 'white' }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSticky;
