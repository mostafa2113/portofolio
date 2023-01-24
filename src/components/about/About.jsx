import React from 'react';
import me from '../../assets/images/me.jpg';
import '../../scss/about.scss';
function About() {
  return (
    <section id="about" className="basic-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={me} alt="mostafa abdeal-nasser" />
          </div>
          <div className="col-lg-4">
            <div className="text-container first">
              <h2>Hi there I'm Mostafa,</h2>
              <p>
                And I love to create beautiful and efficient websites for my
                customers. I love going through the entire process with the
                customer from concept, to design and then development and launch
              </p>
              <div className="text-container second">
                <div className="time">2021 - PRESENT</div>
                <h6>Freelance Web Developer</h6>
                <p>Working happily on my own web projects</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="skills-bar-container">
              <li>
                <div className="progressbar-title">
                  <h3>HTML5</h3>
                  <span className="percent" id="html-pourcent"></span>
                </div>
                <div className="bar-container">
                  <span
                    className="progressbar progressred"
                    id="progress-html"
                  ></span>
                </div>
              </li>
              <li>
                <div className="progressbar-title">
                  <h3>CSS / SASS</h3>
                  <span className="percent" id="css-pourcent"></span>
                </div>
                <div className="bar-container">
                  <span
                    className="progressbar progressblue"
                    id="progress-css"
                  ></span>
                </div>
              </li>

              <li>
                <div className="progressbar-title">
                  <h3>JavaScript / TypeScript</h3>
                  <span className="percent" id="javascript-pourcent"></span>
                </div>
                <div className="bar-container">
                  <span
                    className="progressbar progresspurple"
                    id="progress-javascript"
                  ></span>
                </div>
              </li>

              <li>
                <div className="progressbar-title">
                  <h3>NodeJs</h3>
                  <span className="percent" id="Nodejs-pourcent"></span>
                </div>
                <div className="bar-container">
                  <span
                    className="progressbar progressorange"
                    id="progress-Nodejs"
                  ></span>
                </div>
              </li>

              <li>
                <div className="progressbar-title">
                  <h3>ReactJs</h3>
                  <span className="percent" id="react-pourcent"></span>
                </div>
                <div className="bar-container">
                  <span
                    className="progressbar progressgreen"
                    id="progress-react"
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
