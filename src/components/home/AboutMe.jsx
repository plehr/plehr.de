import React from "react";
import {
  aboutHeading,
  aboutDescription
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          { (
            <div className="col-5 d-none d-lg-block align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src="https://www.gravatar.com/avatar/1d114b8c0a8eabcc80fee05a71bea51b?s=200"
                alt="profilepicture"
              />
            </div>
          )}
          <div className={`col-lg-7`}>
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center">{aboutDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
