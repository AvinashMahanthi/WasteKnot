import React from "react";
import JoinUs from "../Components/JoinUs";
import home from "../assets/images/illustration.png";
import purpose from "../assets/images/purpose1.jpg";
// import blob from "../assets/images/blob.svg";

const Home = () => {
  return (
    <div>
      <section id="home" className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row content-wrapper">
                <div className="col-md-5 pb-2 pt-4 pt-lg-3 order-1 order-lg-1 justify-content-start d-flex flex-column">
                  {/* <span>
                    <img className="blob" src={blob} alt="" />
                  </span> */}
                  <h1>
                    Breaking through <span>Innovation</span>, For Better
                    Recycling!
                  </h1>
                  <h5 className="text-muted mt-2">
                    We support changemakers to drive innovation and create tools
                    for efficient recycling Providing support to bring the best
                    recycling innovation ideas to life!
                  </h5>
                  <button className="joinusbutton">Engage</button>
                </div>
                <div className="col-md-4 offset-lg-1 offset-md-1 col-lg-6 order-2 order-lg-2 pt-2">
                  <img src={home} alt="home" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* purpose of waste knot */}

      <section id="purpose">
        <div className="container pt-2">
          <div className="row">
            <h2 className="section-title pb-3">
              Purpose | What is Waste Knot?
            </h2>
            <div className="row">
              <div className="text-align-center col-md-5 col-lg-6 order-2 order-lg-2 pt-2">
                <img src={purpose} alt="home" className="img-fluid" />
              </div>
              <div className="col-md-6 col-lg-5 mx-2">
                <p className="purpose-p text-muted">
                  Waste Knot works with the core purpose of building a global
                  platform for innovative, low-cost, and scalable for solutions
                  to accelerate the transition towards an inclusive and
                  equitable circular economy.
                </p>
                <p className="purpose-p text-muted">
                  Every activity of Waste Knot is aimed at accelerating
                  disruptive ideas by engaging young talents, stakeholders of
                  the waste management systems, think tanks, non-profits,
                  government agencies, and investors to co-create solutions for
                  the plastic waste problem.
                </p>
                <button to="/About" className="joinusbutton">
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}

      <section id="stats">
        <div className="container pt-5">
          <div className="row">
            <div className="text-align-center col-xl-12">
              <h2 className="section-title">Stats for Circular Economy</h2>
              <p className="text-muted">
                For building entrepreneurial communities and sustainable
                environments
              </p>
            </div>
            <div className="row mx-1">
              <div className="col-sm-4 col-xl-4 col-md-4">
                <div className="single_counter card text-center">
                  <h2>
                    <span className="counter">9 </span>
                    <span>M</span>
                  </h2>
                  <h6 className="text-muted">
                    Tonnes of Plastic Waste in India
                  </h6>
                </div>
              </div>
              <div className="col-sm-4 col-xl-4 col-md-4">
                <div className="single_counter card text-center">
                  <h2>
                    <span className="counter">40</span> <span>%</span>
                  </h2>
                  <h6 className="text-muted">Uncollected Plastic</h6>
                </div>
              </div>
              <div className="col-sm-4 col-xl-4 col-md-4">
                <div className="single_counter card text-center">
                  <h2>
                    <span className="counter">15</span> <span>B USD</span>
                  </h2>
                  <h6 className="text-muted">
                    Projected Worth Waste Management
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinUs />
    </div>
  );
};

export default Home;
