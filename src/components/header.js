/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = () => {
  return (
    <div
      className="p-4"
      style={{
        top: 0,
        position: "absolute",
        width: "-webkit-fill-available",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="Bootstrap"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <span style={{ color: "#ffffff", fontSize: "36px" }}>Home</span>
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#about"
                >
                  <h5>About</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">
                  <h5>Pricing</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <h5>Contact</h5>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-light">
                  <h4 className="m-0">Login</h4>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
