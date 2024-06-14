import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import juhi from "../../assets/juhi.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={juhi} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a Full-Stack developer with 1 year of experience in front end development with top-notch skills in
                JavaScript, React, HTML, and CSS. Additionally, I am proficient
                in Node.js, Express, Java, SQL, MongoDB, and Redux Toolkit. My
                expertise spans both front-end and back-end development,
                allowing me to create dynamic and user-friendly web
                applications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
