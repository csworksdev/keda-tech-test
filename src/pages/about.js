/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div class="container py-3 align-items-between">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column align-items-start">
            <h3>Career</h3>
            <caption>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </caption>
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ width: "max-content" }}
            >
              Read More
            </button>
          </div>
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/career.png"}
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/certificate.png"}
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-start">
            <h3>Career</h3>
            <caption>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </caption>
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ width: "max-content" }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
