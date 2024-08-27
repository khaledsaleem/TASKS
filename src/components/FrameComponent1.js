import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`container-frame ${className}`}>
      <div className="container4">
        <div className="row7">
          <div className="col-md-7">
            <b className="made-with-love">{`Made With Love By Figmaland All Right Reserved `}</b>
          </div>
          <div className="col-md-62">
            <div className="social-media">
              <img className="facebook-icon1" alt="" src="/facebook.svg" />
              <img className="facebook-icon1" alt="" src="/instagram.svg" />
              <img className="twitter-icon1" alt="" src="/twitter.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
