import React from "react";
import JoinUs from "../Components/JoinUs";
import Academy1 from "../assets/images/Academy1.jpg";
import Academy2 from "../assets/images/Academy2.jpg";

const Academy = () => {
  return (
    <section id="Academy">
      <div className="container-fluid">
        <div className="Academy-img Academy-area">
          <h2 className="section-title">
            Be The Change Academy, We believe in You!
          </h2>
        </div>
        <div className="container">
          <div className="row Academy-text">
            <h1 className="section-title">Educating Everyone</h1>
            <div className="row py-5">
              <div className="text-align-center col-md-5 col-lg-6">
                <img src={Academy1} alt="home" className="img-fluid" />
              </div>
              <div className="col-md-6 col-lg-5 pt-1">
                <br />
                <p className="Academy-p text-muted">
                  Be The Change Academy is South Asia’s first makerspace &
                  research lab dedicated to recycling waste. This Waste Knot’s
                  flagship project is in Bettahalsoor on the outskirts of
                  Bengaluru.
                </p>
                <br />
                <p className="Academy-p text-muted">
                  Be The Change Academy is the focal point for all
                  post-hackathon activities of Waste Knot. At BTCA, winning
                  teams shall work on their prototypes, pilot test them, get
                  mentorship on issues they face while interacting with subject
                  matter experts and waste management stakeholders etc.
                </p>
                <br />
              </div>
            </div>
            <hr
              style={{
                color: "#2F3192",
                width: "30%",
                margin: "auto",
                height: "1px",
              }}
            />

            <div className="row py-5">
              <div className="col-md-6 col-lg-6">
                <p className="Academy-p text-muted">
                  BTCA is also open for public, with the aim of inspiring
                  enthusiasts to creatively interact with the recycling
                  processes, gain awareness & insight on the types of trash, the
                  challenges in the waste management processes and opportunities
                  in the sector etc.
                </p>
                <br />
                <p className="Academy-p text-muted">
                  At BTCA, Waste Knot Catalysts will also research on finding
                  low cost, scalable and inclusive solutions in the following
                  areas:
                </p>
                <div className="Academy-info">
                  <ul>
                    <li className="text-muted">Solar Panel Recycling </li>
                    <li className="text-muted">Li-Ion Battery Recycling </li>
                    <li className="text-muted">
                      Flexible Packaging (Low Value Plastics) Recycling
                    </li>
                    <li className="text-muted">Fabric Recycling</li>
                  </ul>
                </div>
              </div>
              <div className="text-align-center col-md-5 col-lg-6 order-1">
                <img src={Academy2} alt="home" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinUs />
    </section>
  );
};

export default Academy;
