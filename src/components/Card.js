import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ className = "", iconCoolIconN2, h5FeatureTitleSec }) => {
  return (
    <div className={`card ${className}`}>
      <div className="fixed-width-sec-">
        <img
          className="icon-cool-icon-n2"
          loading="lazy"
          alt=""
          src={iconCoolIconN2}
        />
      </div>
      <b className="h5-feature-title-sec-">{h5FeatureTitleSec}</b>
      <div className="fixed-width-fixed-height-sec-" />
      <div className="paragraph-feature-description-container">
        <p className="the-gradual">{`The gradual `}</p>
        <p className="the-gradual">{`accumulation of `}</p>
        <p className="the-gradual">{`information about `}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  iconCoolIconN2: PropTypes.string,
  h5FeatureTitleSec: PropTypes.string,
};

export default Card;
