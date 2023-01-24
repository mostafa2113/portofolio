import React from 'react';
import { Link } from 'react-router-dom';

function Foooter() {
  return (
    <>
      <footer className="footer bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="social-container">
                <span className="fa-stack">
                  <a
                    href="https://www.facebook.com/mostafa.nasser.213/"
                    target="blank"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://twitter.com/0xMostafaNasser" target="blank">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="https://github.com/mostafa2113" target="blank">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-github fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a
                    href="https://www.linkedin.com/in/mostafa-abdel-nasser-9b946020a/"
                    target="blank"
                  >
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-linkedin fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="p-small">
                  Copyright ©{' '}
                  <Link className="no-line" to="/">
                    Mostafa Abdeal-Nasser
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foooter;
