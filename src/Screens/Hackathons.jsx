import React from "react";
import JoinUs from "../Components/JoinUs";
import hacakathon from "../assets/images/hackathon3.jpg";
import HackathonData from "../Components/HackathonData";
import UpCommingHacakthonsCard from "../Components/UpCommingHacakthonsCard";
import Objectives from "../Components/Objectives";

const Hackathons = () => {
  return (
    <section id="hackathon">
      <div className="hackathon-area">
        <h2 className="section-title">Learn, Build, Grow and Win!</h2>
      </div>
      <div className="container">
        <h1 className="section-title my-5">Building MVP's</h1>
        <p className="Academy-p text-muted">
          Waste Knot Hacks are immersive, inclusive and impact-oriented
          hackathons designed to address challenges related to plastic waste.
          During these 48 hour theme based ideation sprints, passionate
          innovators work with changemakers, community leaders and relevant
          stakeholders to collaboratively find meaningful solutions to the
          challenges identified.
        </p>

        {/* <Objectives
          title="Inspire, Empower & Support"
          description="passionate
          innovators work with changemakers, community leaders and relevant
          stakeholders to collaboratively find meaningful solutions to the
          challenges identified."
        /> */}

        <div className="container pt-2">
          <div className="row py-5">
            <div className="text-align-center col-md-5 col-lg-6">
              <img src={hacakathon} alt="home" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-6 pt-1">
              <h1 className="section-title">Why Participanting? </h1>
              <ul>
                <li>
                  <p className="Academy-p text-muted">
                    Be The Change Academy is South Asia’s first makerspace &
                    research lab dedicated to recycling waste. This Waste Knot’s
                    flagship project is in Bettahalsoor on the outskirts of
                    Bengaluru.
                  </p>
                </li>
                <li>
                  <p className="Academy-p text-muted">
                    Be The Change Academy is the focal point for all
                    post-hackathon activities of Waste Knot. At BTCA, winning
                    teams shall work on their prototypes, pilot test them,
                  </p>
                </li>
                <li>
                  <p className="Academy-p text-muted">
                    get mentorship on issues they face while interacting with
                    subject matter experts and waste management stakeholders
                    etc.
                  </p>
                </li>
              </ul>
            </div>
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
        <div className="container py-4">
          <h1 className="section-title">Upcoming Hackathons</h1>
          {/* <UpCommingHacakthons /> */}
          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  {HackathonData.map((value, ind) => {
                    return (
                      <UpCommingHacakthonsCard
                        key={ind}
                        title={value.title}
                        description={value.description}
                        RegestrationLink={value.RegestrationLink}
                        imgsrc={value.imgsrc}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Objectives
        title="Inspire, Empower & Support"
        description="passionate
          innovators work with changemakers, community leaders and relevant
          stakeholders to collaboratively find meaningful solutions to the
          challenges identified."
      />
      <JoinUs />
    </section>
  );
};

export default Hackathons;
