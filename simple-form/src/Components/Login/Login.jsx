import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="login-head text-uppercase text-center mb-5">
                      Login to your account
                    </h2>
                    <form className="register-form-div">
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="mail form-control form-control-lg"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder=" Password"
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Login
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Don't have an account?{"  "}
                        <Link className="fw-bold text-body" to="/register">
                          {" "}
                          <u>Register here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
