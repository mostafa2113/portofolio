import React from 'react';

function Contact() {
  return (
    <section id="contact" className="form-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact details</h2>
            <p className="p-heading">
              For any type of online project please don't hesitate to get in
              touch with me. The fastest way is to send me your message using
              the following email{' '}
              <a
                className="blue no-line"
                href="mailto:mostafa_abdeal-nasser213@outlook.com"
              >
                mostafa_abdeal-nasser213@outlook.com
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              id="contactForm"
              action="https://formsubmit.io/send/ 7f1c9ede-2bde-48c2-b995-3e97e4356357"
              method="post"
            >
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control-input"
                  id="cname"
                  required
                />
                <label className="label-control" htmlFor="cname">
                  Name
                </label>
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control-input"
                  id="cemail"
                  required
                />
                <label className="label-control" htmlFor="cemail">
                  Email
                </label>
              </div>
              <div className="form-group">
                <textarea
                  name="project-details"
                  className="form-control-textarea"
                  id="cmessage"
                  required
                ></textarea>
                <label className="label-control" htmlFor="cmessage">
                  Project details
                </label>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
