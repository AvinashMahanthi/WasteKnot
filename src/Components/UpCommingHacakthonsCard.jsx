import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDoubleRight } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const UpCommingHacakthonsCard = (props) => {
  return (
    <div className="col-md-5 col-12 mx-auto">
      <div className="card project-card">
        <img
          className="card-img-top Project-Card-img"
          src={props.imgsrc}
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text text-muted">{props.description}</p>
          <a href={props.RegestrationLink} target="/blank" className="Register">
            <h6>
              Register
              <span className="m-2 center">
                <a href={props.RegestrationLink}>
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </a>
              </span>
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpCommingHacakthonsCard;
