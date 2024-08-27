import PropTypes from "prop-types";
import "./Layout1.css";

const Layout1 = ({ className = "" }) => {
  return (
    <section className={`layout-1 ${className}`}>
      <div className="subscription-wrapper">
        <div className="subscription-content">
          <div className="subscription-header">
            <b className="h6-section-tag-sec-3">Newsletter</b>
          </div>
          <div className="subscription-heading">
            <h2 className="h3-section-title-4-sec-">Watch our Courses</h2>
          </div>
          <div className="paragraph-sec-6">
            <p className="problems-trying-to5">{`Problems trying to resolve the conflict between `}</p>
            <p className="problems-trying-to5">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
          </div>
        </div>
      </div>
      <div className="form-control-input-style-1">
        <div className="input-label">
          <div className="your-email">Your Email</div>
        </div>
        <button className="btn">
          <div className="button-content">Subscribe</div>
        </button>
      </div>
    </section>
  );
};

Layout1.propTypes = {
  className: PropTypes.string,
};

export default Layout1;
