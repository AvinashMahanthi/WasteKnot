import React from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div style={{ margin: "2rem" }} className="modal m-2">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Join the Team</h4>
        </div>
        <div className="modal-body">
          <p className="card-text">
            We are always looking for people who want to solve the biggest
            challenges affecting society and our planet, and can use their
            skills and empathy to do so. If this is you, we would love to hear
            from you.
          </p>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">
                <strong>Email address</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                <strong>Name</strong>
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Name"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
