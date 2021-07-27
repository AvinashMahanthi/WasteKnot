import React from "react";
import JoinUs from "../Components/JoinUs";
import future from "../assets/images/about-future.jpg";
import person from "../assets/images/person.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="about-header">
        <h1 className="section-title my-5">Beyond Recycling</h1>
        <p className="mx-4 text-muted about-text">
          Waste Knot Foundation aims to fast-track the transition to an
          inclusive and equitable circular economy by bringing together public
          and private sector leaders, non-profits, stakeholders of the formal
          and informal waste management systems and innovators to foster dynamic
          local and regional ecosystems for innovation. Waste Knot aims to
          inspire, empower and support young makers, innovators, entrepreneurs -
          create a continuously evolving ecosystem of innovation to boost
          circular economy.
        </p>
      </div>
      <div className="about-content">
        <div className="container">
          <div className="row">
            <h1 className="section-title">Towards the Future</h1>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-12">
                <img src={future} alt="home" className="img-fluid" />
              </div>
              <div className="col-md-6 col-lg-6 col-12 about-text">
                <p className="about-header">
                  Waste Knot is a social enterprise focused on bringing together
                  people, platforms, knowledge and cutting edge technologies to
                  limit waste, preserve value and closing the loop.
                </p>
                <ul className="mx-1 text-muted">
                  <li className="p-2">
                    Collaborate with fellow innovators and get inspired by the
                    waste management stakeholders at the makerspaces.
                  </li>
                  <li className="p-2">
                    Apply insights and ideate bold solutions to tackle the
                    challenges we face at Circularity Hacks.
                  </li>
                  <li className="p-2">
                    Iterate prototypes, pilot test them and build scalable
                    start-ups with the connections, community, and capital they
                    can access at Catalyst.
                  </li>
                  <li className="p-2">
                    Apply insights and ideate bold solutions to tackle the
                    challenges we face at Circularity Hacks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}

      <div class="gallery_area">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title text-center mb-50">
                <h3 className="section-title">Our Team</h3>
              </div>
            </div>
          </div>

          <div class="row grid">
            <div class="col-xl-4 col-lg-6 grid-item cat1 col-md-6">
              <div class="single-gallery mb-20 pb-3">
                <div class="portfolio-img">
                  <img src={person} alt="" />
                </div>
                <div class="gallery_hover">
                  <a href="portfolio_details.html" class="hover_inner">
                    <h3>Ravi Theja Muthu</h3>
                    <span>Co-Founder</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 grid-item cat3 cat4 col-md-6">
              <div class="single-gallery mb-20c pb-3">
                <div class="portfolio-img">
                  <img src={person} alt="" />
                </div>
                <div class="gallery_hover">
                  <a href="portfolio_details.html" class="hover_inner">
                    <h3>Bharath Edara</h3>
                    <span>Co-Founder</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 grid-item cat4 col-md-6">
              <div class="single-gallery mb-20 pb-3">
                <div class="portfolio-img">
                  <img src={person} alt="" />
                </div>
                <div class="gallery_hover">
                  <a href="portfolio_details.html" class="hover_inner">
                    <h3>Manisha Meeka</h3>
                    <span>Co-Founder</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinUs />
    </section>
  );
};

export default About;
