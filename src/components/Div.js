import PropTypes from "prop-types";
import "./Div.css";

const Div = ({ className = "" }) => {
  return (
    <div className={`div ${className}`}>
      <div className="container3">
        <div className="row6">
          <div className="col-md-2">
            <b className="h5">Company Info</b>
            <div className="div1">
              <b className="link4">About Us</b>
              <b className="link5">Carrier</b>
              <b className="link6">We are hiring</b>
              <b className="link7">Blog</b>
            </div>
          </div>
          <div className="col-md-21">
            <b className="h51">Legal</b>
            <div className="div1">
              <b className="link4">About Us</b>
              <b className="link5">Carrier</b>
              <b className="link6">We are hiring</b>
              <b className="link7">Blog</b>
            </div>
          </div>
          <div className="col-md-22">
            <b className="h52">Features</b>
            <div className="div1">
              <b className="link12">Business Marketing</b>
              <b className="link13">User Analytic</b>
              <b className="link14">Live Chat</b>
              <b className="link12">Unlimited Support</b>
            </div>
          </div>
          <div className="col-md-23">
            <b className="h53">Resources</b>
            <div className="div1">
              <b className="link16">{`IOS & Android`}</b>
              <b className="link17">Watch a Demo</b>
              <b className="link18">Customers</b>
              <b className="link19">API</b>
            </div>
          </div>
          <div className="col-md-4">
            <b className="h54">Get In Touch</b>
            <div className="div5">
              <div className="feature-item">
                <img className="bxbx-phone-icon" alt="" src="/bxbxphone.svg" />
                <b className="h67">(480) 555-0103</b>
              </div>
              <div className="feature-item1">
                <img
                  className="bxbx-map-icon"
                  loading="lazy"
                  alt=""
                  src="/bxbxmap.svg"
                />
                <b className="h68">
                  <p className="washington-ave-manchester">{`4517 Washington Ave. Manchester, `}</p>
                  <p className="washington-ave-manchester">Kentucky 39495</p>
                </b>
              </div>
              <div className="feature-item">
                <img
                  className="carbonsend-alt-icon"
                  loading="lazy"
                  alt=""
                  src="/carbonsendalt.svg"
                />
                <b className="link12">debra.holt@example.com</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Div.propTypes = {
  className: PropTypes.string,
};

export default Div;
