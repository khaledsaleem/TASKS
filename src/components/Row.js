import PropTypes from "prop-types";
import "./Row.css";

const Row = ({ className = "" }) => {
  return (
    <div className={`row ${className}`}>
      <div className="col-md-6">
        <b className="h5-header-tag-sec-">Welcome</b>
        <h1 className="h1-headline-sec-">Best Learning Opportunities</h1>
        <h3 className="h4-sub-headline-sec-">
          Our goal is to make online education work for everyone
        </h3>
        <div className="cta">
          <button className="button-md-sec-">
            <b className="component">Join Us</b>
          </button>
          <button className="button-md-sec-1">
            <a href="#" className="since-we">Learn More</a>
          </button>
        </div>
      </div>
      <img className="col-md-6-icon" loading="lazy" alt="" src="/colmd6.svg" />
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
