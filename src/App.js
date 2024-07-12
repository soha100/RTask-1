import { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <>
        <div className="landing">
          <nav className="navbar mx-5">
            <div className="container-fluid">
              <a className="navbar-brand text-light fs-4 fw-bold" href="#">
                Beans <span className="std">Studios</span>
              </a>
              <div className="toggle btn btn-warning rounded-circle text-light">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          </nav>
          <div className="container mt-5 pt-5 pb-5">
            <div className="row pb-5">
              <div className="col-lg-6 col-sm-12 text-light">
                <p className="botton btn btn-warning text-light rounded-pill">
                  Hello, i am
                </p>
                <h1>Mr. Beans</h1>
                <p className="fs-6 fw-bold">
                  FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER
                </p>
                <div>
                  <a
                    className="btn btn-light rounded-circle text-info"
                    href="https://www.twitter.com/"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    className="btn btn-light rounded-circle text-primary"
                    href="https://www.facebook.com/"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    className="btn btn-light rounded-circle text-primary"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    className="btn btn-light rounded-circle text-danger"
                    href="https://www.pinterest.com/"
                  >
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </div>
                <p className="botton btn btn-warning text-light rounded-pill mt-5">
                  Download CV
                </p>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img
                  src={require("./images/land.png")}
                  alt=""
                  className="float-end"
                  style={{ width: "450px", height: "400px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark">
          <div className="container pt-5 pb-3">
            <div className="row pt-5 pb-5">
              <div className="col-lg-7 col-sm-12 pt-5 pb-5 text-light">
                <img
                  src={require("./images/person1.jpg")}
                  alt=""
                  class="w-50 h-60 border border-3 border-warning rounded-top-circle"
                />
                <div className="">
                  <p className="m-0 mt-3">Certifications</p>
                  <h1 className="m-0 fs-4">Irael Gonzalez</h1>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 text-light mt-5 mb-5">
                <h2 className="head-1 fs-1 fw-bold">About Me</h2>
                <p className="fs-5 fw-bold">
                  I'm Israel Gonzalez, I'm 27 years old, I currently work
                  independently as a fullstack, UX|UI designer and video game
                  designer.
                  <br />
                  <br />I currently have a video game studio where I spend my
                  time mixing ideas from all my work to generate quality stories
                  that everyone can enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="container pt-2 pb-4 text-light">
            <h1 className="head mt-5 text-center fw-bold">My Services</h1>
            <div className="row mt-5 justify-content-between">
              <div className="col-lg-5 d-flex mb-4">
                <div className="text-end">
                  <h2 className="fs-3">PHOTOGRAPHY</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
                <div
                  className="border border-3 border-warning rounded-circle text-center ms-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
              </div>
              <div className="col-lg-5 d-flex mb-4">
                <div
                  className="border border-3 border-warning rounded-circle text-center me-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
                <div>
                  <h2 className="fs-3">WEB DEVELOPMENTD</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 d-flex mb-4">
                <div className="text-end">
                  <h2 className="fs-3">UI/UX DESIGN</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
                <div
                  className="border border-3 border-warning rounded-circle text-center ms-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i class="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
              </div>
              <div className="col-lg-5 d-flex mb-4">
                <div
                  className="border border-3 border-warning rounded-circle text-center me-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
                <div>
                  <h2 className="fs-3">3D DESIGN</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 d-flex mb-4">
                <div className="text-end">
                  <h2 className="fs-3">WEB DESIGN</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
                <div
                  className="border border-3 border-warning rounded-circle text-center ms-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
              </div>
              <div className="col-lg-5 d-flex mb-4">
                <div
                  className="border border-3 border-warning rounded-circle text-center me-3 mt-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa-solid fa-wand-magic-sparkles mt-3"></i>
                </div>
                <div>
                  <h2 className="fs-3">2D DESIGN</h2>
                  <p className="fs-6 fw-bold">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit. Sunt
                    <br />
                    doloremque excepturi sit odit
                    <br />
                    impedit, voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfile pt-5 bg-dark">
          <h1 className="head-2 text-center fw-bold m-3 text-light mb-3 pb-5 titles">
            Portfolio
          </h1>
          <div className="row p-0 m-0">
            <div className="col-2 p-0">
              <img
                src={require("./images/Portfolio1.png")}
                className="h-100 w-100"
                alt=""
              />
            </div>

            <div className="col-2 p-0">
              <img
                src={require("./images/Portfolio.png")}
                className="h-100 w-100"
                alt=""
              />
            </div>

            <div className="col-lg-4 p-0">
              <img
                src={require("./images/portfolio4.png")}
                className="h-100 w-100"
                alt=""
              />
            </div>
            <div className="col-lg-2 p-0">
              <img
                src={require("./images/Portfolio5.png")}
                className="h-100 w-100"
                alt=""
              />
            </div>
            <div class="col-lg-2 p-0">
              <img
                src={require("./images/Portfolio6.png")}
                className="h-100 w-100"
                alt=""
              />
            </div>
          </div>
          <div className="row p-0 m-0">
            <div className="col-lg-4 p-0">
              <img
                src={require("./images/Portfolio7.png")}
                className="h-50 w-100"
                alt=""
              />
            </div>
            <div className="col-lg-2 p-0">
              <img
                src={require("./images/Portfolio8.png")}
                className="h-50 w-100"
                alt=""
              />
            </div>
            <div className="col-lg-2 p-0">
              <img
                src={require("./images/Portfolio9.png")}
                className="h-50 w-100"
                alt=""
              />
            </div>
            <div className="col-lg-4 p-0">
              <img
                src={require("./images/Portfolio10.png")}
                className="h-50 w-100"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="blog ms-auto pb-5">
          <div className="container text-center mb-5">
            <div className="row">
              <div
                className="h-100"
                style={{
                  background: "#000",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                <h1 className="head text-center fw-bold m-3 text-light mb-5 p-5 titles">
                  Blog
                </h1>
              </div>
            </div>
            <div className="container text-center m-0">
              <div className="row ms-auto justify-content-center">
                <div className="col-lg-3 col-sm-4 m-0">
                  <img
                    src={require("./images/blog1.png")}
                    className="img"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-sm-4 text-center">
                  <img
                    src={require("./images/blog2.png")}
                    className="img"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-sm-4">
                  <img
                    src={require("./images/blog3.png")}
                    className="img"
                    alt=""
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-4 ms-3">
                  <img
                    src={require("./images/blog4.png")}
                    className="img"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-sm-4">
                  <img
                    src={require("./images/blog5.png")}
                    className="img"
                    alt=""
                  />
                </div>
              </div>
              <div className="row mb-5 justify-content-center">
                <div className="col-lg-2 col-sm-6">
                  <img
                    src={require("./images/blog6.png")}
                    className="img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact bg-dark p-5">
          <div className="container">
            <div className="row justify-content-evenly">
              <h1 className="head text-center ms-5 fw-bold m-3 text-light mb-5 pb-5 title ps-5">
                GET IN TOUCH
              </h1>
              <div className="col-lg-4 lg-sm-12">
                <div className="col mb-2">
                  <input
                    type="text"
                    className="form-control border border border-warning bg-dark rounded-pill p-3 text-light"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control border border-warning bg-dark rounded-pill p-3"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border border-warning bg-dark rounded-pill p-3"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control border border-warning bg-dark rounded-3 p-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="botton btn btn-primary border-0 p-2 ps-4 pe-4 rounded-pill mb-5"
                >
                  Submit
                </button>
              </div>
              <div className="col-lg-4 lg-sm-12">
                <div className="card box">
                  <div className="card-body text-light">
                    <h5 className="card-title">CONTACT INFO</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quia quae quas explicabo corrupti necessitatibus
                      quisquam quos?.
                    </p>

                    <p className="card-text">
                      <i className="fa-solid fa-location-crosshairs fs-5 fw-bold me-1"></i>
                      Address:
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit, numquam.
                    </p>

                    <p className="card-text">
                      <i className="fa-solid fa-envelope fs-5 fw-bold me-1"></i>{" "}
                      Email: iisraelgonza@gmail.com abelisraelromero@gmail.com
                    </p>

                    <p className="card-text">
                      <i className="fa-solid fa-mobile-button fs-5 fw-bold me-1"></i>
                      Phone: +52 671 114 3273
                    </p>

                    <p className="card-text">
                      <i className="fa-solid fa-diagram-successor fs-5 fw-bold me-1"></i>
                      office - Beans studio
                    </p>

                    <p className="card-text">
                      <i className="fa-brands fa-skype fs-5 fw-bold me-1"></i>{" "}
                      Skype: sadfasd.skype
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials pb-5">
          <div className="container mb-5">
            <h1 className="text-center fw-bold m-0 text-light mb-5 pt-5">
              Testimonial
            </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-3">
                      This is a template Figma file, turned into code using
                      Anima. Learn more at AnimaApp.com
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex">
                    <img
                      src={require("./images/person2.png")}
                      alt="person2"
                      className="card-img-top rounded-circle me-4"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="col-lg-6 col-sm-12">
                      <div className="d-flex mb-2">
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                        <i className="fa-solid fa-star pe-1"></i>
                      </div>
                      <h5 className="card-title mb-1 fs-5">Gemma Nolen</h5>
                      <p className="card-text mb-2">Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="example-projects pt-5 pb-5">
          <div className="container pt-5">
            <div className="row pt-5">
              <div className="col-lg-6 col-sm-12">
                <div className="feature-project">
                  <p className="project-subtitle mb-0">Featured Project</p>
                  <h3 className="project-title">Example Project</h3>
                  <div className="box">
                    <p>
                      A web app for visualizing personalized Spotify data. View
                      your top artists, top tracks, recently played tracks, and
                      detailed audio information about each track. Create and
                      save new playlists of recommended tracks based on your
                      existing playlists and more.
                    </p>
                  </div>
                  <div className="icons"></div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="image">
                  <img src={require("./images/example.jpg")} alt="example" />
                </div>
              </div>
            </div>
            <div className="reversed">
              <div className="row flex-row-reverse">
                <div className="col-lg-6 col-sm-12">
                  <div className="feature-project">
                    <p className="project-subtitle mb-0">Featured Project</p>
                    <h3 className="project-title">Example Project</h3>
                    <div className="box">
                      <p>
                        A web app for visualizing personalized Spotify data.
                        View your top artists, top tracks, recently played
                        tracks, and detailed audio information about each track.
                        Create and save new playlists of recommended tracks
                        based on your existing playlists and more.
                      </p>
                    </div>
                    <div className="icons"></div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="image">
                    <img src={require("./images/example.jpg")} alt="example" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="row m-0 text-light pt-5 mx-5">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <h1 className="m-0 mb-3">Your name.</h1>
              <p className="fs-4 text-secondary">decs</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <p className="fs-4 p-0 mb-4 text-secondary">Links</p>
              <ul className="p-0">
                <li className="mb-3">Home</li>
                <li className="mb-3">Shop</li>
                <li className="mb-3">About</li>
                <li className="mb-3">Contact</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <p className="fs-4 p-0 mb-4 text-secondary">Help</p>
              <ul className="p-0">
                <li className="mb-3">Payment Options</li>
                <li className="mb-3">Returns</li>
                <li className="mb-3">Privacy Policies</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="fs-4 p-0 mb-4 text-secondary">Newsletter</p>
              <div className="d-flex mb-4 gap-3">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="border border-top-0 border-end-0 border-start-0"
                />
                <span className="pb-1 text-light border border-top-0 border-end-0 border-start-0">
                  SUBSCRIBE
                </span>
              </div>
            </div>
            <hr />
            <p>2024 furino. All rights reverved</p>
          </div>
        </div>
      </>
    );
  }
}
