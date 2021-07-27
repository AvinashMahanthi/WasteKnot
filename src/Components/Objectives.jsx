import React from "react";
import controls from "../assets/images/controls.svg";
import barChart from "../assets/images/bar-chart.svg";
import puzzle from "../assets/images/puzzle.svg";

const Objectives = (props) => {
  return (
    <section id="objectives" className="container-fluid my-5">
      <div className="container">
        <h1 className="section-title text-center my-3 font-weight-bold mt-2">
          {props.title}
        </h1>
        <h5 className="text-muted text-center font-weight-light mt-4 font-white">
          {props.description}
        </h5>

        <div className="row mt-5 col-xl-12">
          <div className="col-md-6 col-lg-4">
            <div className="media block-6 services d-block text-center">
              <img className="icon-img" src={barChart} alt="" />
              <div className="media-body">
                <h3 className="heading mb-3">Academy</h3>
                <p className="text-muted">
                  Creating a knowledge bank with workshops, trainings and
                  courses on plastic recycling concepts to educate people and
                  build more entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-self-stretch">
            <div className="media block-6 services d-block text-center">
              <img className="icon-img" src={puzzle} alt="" />
              <div className="media-body">
                <h3 className="heading mb-3">Hackathons</h3>
                <p className="text-muted ">
                  Designed to speed up the process of co-creation of innovative
                  and entrepreneurial solutions to various issues around waste.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-self-stretch">
            <div className="media block-6 services d-block text-center">
              <img className="icon-img" src={controls} alt="" />
              <div className="media-body">
                <h3 className="heading mb-3">Labs</h3>
                <p className="text-muted ">
                  A fun and sustainable plastic recycling space for makers,
                  innovators and entrepreneurs to ideate, experiment and develop
                  their concepts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
