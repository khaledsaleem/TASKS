import PropTypes from "prop-types";
import "./ColMd1.css";

const ColMd1 = ({ className = "", fixedHeightSec }) => {
  return (
    <div className={`col-md-3 ${className}`}>
      <div className="user-card">
        <img
          className="fixed-height-sec-icon"
          loading="lazy"
          alt=""
          src={fixedHeightSec}
        />
        <div className="card-content1">
          <b className="h5-user-title-sec-">Julian Jameson</b>
          <div className="small-job-description-sec-">Profession</div>
          <div className="social-media-sec-">
            <img
              className="facebook-icon"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="facebook-icon"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img className="twitter-icon" alt="" src="/twitter.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

ColMd1.propTypes = {
  className: PropTypes.string,
  fixedHeightSec: PropTypes.string,
};

export default ColMd1;
