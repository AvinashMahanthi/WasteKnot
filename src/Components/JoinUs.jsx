import React, { useState } from "react";
import Modal from "./Modal";

const JoinUs = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div id="joinus">
        <div className="container">
          <span className="bg-img"></span>
          <h1>You can start working with us, Right now!</h1>
          <button
            onClick={() => setShow(true)}
            type="button"
            className="button btn"
          >
            Join us
          </button>
          <Modal show={show} />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
