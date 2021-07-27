import React from "react";
import contact from "../assets/images/getInTouch.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="my-5 mx-auto">
        <h1 className="text-center section-title">Get in touch</h1>
        <h6 id="emailHelp" className="form-text text-muted text-center">
          Want to discuss anything? Just fill up this form or write us an email
        </h6>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-10 mx-auto contact-form">
              <form
                name="contact"
                // method="post"
                // data-netlify="true"
                // data-netlify-honeypot="bot-field"
                // onSubmit={sendEmail}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <label
                    className="contact-label"
                    htmlFor="exampleInputPassword1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label className="contact-label" htmlFor="exampleInputEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label
                    className="contact-label"
                    htmlFor="exampleInputPassword1"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Please type your message"
                    name="message"
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-lg-6 col-md-5 order1 order-lg-2">
              <img src={contact} alt="home" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
