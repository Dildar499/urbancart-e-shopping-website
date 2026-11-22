import "./Contact.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Contact() {

    const handleForm = (e)=>{
        e.PreventDefault();
    }
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "300px" }}
      >
        <h1 className="fw-bold mb-3">
          <span className="text-primary">Contact</span> Us
        </h1>
        <p className=" text-secondary text-center">
          We're always here to help you with any questions, concerns, or issues
          you may have. <br />
          If you need to get in touch with us, here's how
        </p>
      </div>
      <div className="container">
        <div className="row g-4 my-4">
          <div
            className="col-12 col-lg-5 bg-info d-flex flex-column justify-content-between p-4"
            style={{ height: "350px" }}
          >
            {/* Top content */}
            <div>
              <h3 className="text-dark">Contact Information</h3>

              <p className="text-light">
                We are happy to answer any question, you might have
              </p>

              <p>
                <a
                  className="text-decoration-none text-light"
                  href="mailto:webtech754@gmail.com"
                >
                  webtech754@gmail.com
                </a>
              </p>
            </div>

            {/* Bottom social icons */}
            <div className="d-flex gap-3 social-icons mt-4">
              <a
                className="text-decoration-none text-light"
                href="https://www.facebook.com/YoYoChoteawabw222/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} 
                size="2x"/>
              </a>

              <a
                className="text-decoration-none text-light"
                href="https://www.instagram.com/yoyochotenawab?hvrq=MWQzOWgwaG4zYjE2bw=="
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} 
                size="2x"/>
              </a>

              <a
                className="text-decoration-none text-light"
                href="https://www.linkedin.com/in/dildar-hussain-184790315/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} 
                size="2x"/>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <form onSubmit={handleForm} className="row g-3">
              <div className="col-12">
                <h5>Send us a message</h5>
              </div>

              <div className="col-12 col-md-6 input-fields">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div className="col-12 col-md-6 input-fields">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="col-12 col-md-6 input-fields">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>

              <div className="col-12 col-md-6 input-fields">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Subject"
                  required
                />
              </div>

              <div className="col-12 input-fields">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message..."
                  required
                ></textarea>
                <button className="btn btn-primary mt-2 p-3 border rounded-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
