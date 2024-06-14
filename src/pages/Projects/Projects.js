import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center"></p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Context Api</span>
                  <span className="card-detail-badge">react-router</span>
                  <span className="card-detail-badge">react</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Ecommerce Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/juhi-coder/e-commerse-website"
                  >
                    Source Code
                  </a>
                  <a className="ad-btn" href="https://ecommerce-ecb5d.web.app/">
                    Live Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img
                    src="https://th.bing.com/th/id/OIP.iCK9edOOuJp19JPwLAWT3AAAAA?pid=ImgDet&rs=1"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                  <span className="card-detail-badge">React-router</span>
                  <span className="card-detail-badge">Redux</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Expense Tracker Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/juhi-coder/expense-tracker-react"
                  >
                    Source Code
                  </a>
                  <a
                    className="ad-btn"
                    href="https://expance-tracker-2795d.web.app"
                  >
                    Live Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Front-End</span>
                  <img
                    src="https://i.ytimg.com/vi/pMR_3FQxdYo/maxresdefault.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">router</span>

                  <span className="card-detail-badge">context api</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Ordering App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/juhi-coder/resurant-website"
                  >
                    Source Code
                  </a>
                  <a className="ad-btn" href="https://restront-60b99.web.app">
                    Live Code
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
